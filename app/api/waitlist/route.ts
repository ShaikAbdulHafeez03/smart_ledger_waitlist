import { NextRequest, NextResponse } from 'next/server';
import { pool, ensureDbInitialized } from '../../lib/db';

export async function POST(req: NextRequest) {
  try {
    await ensureDbInitialized();
    const { email } = await req.json();

    // Server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // If DATABASE_URL is not configured, log and return success (mock mode)
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('your_postgres_url_here')) {
      console.log('[Waitlist Mock] Email received:', email);
      return NextResponse.json({ success: true, mock: true, surveyCompleted: false });
    }

    try {
      // Insert new waitlist email
      await pool.query(
        'INSERT INTO waitlist_emails (email, survey_completed) VALUES ($1, $2)',
        [email, false]
      );
      
      return NextResponse.json({ success: true, surveyCompleted: false });
    } catch (dbError: any) {
      // Handle duplicate email (Postgres error code 23505)
      if (dbError.code === '23505') {
        const { rows } = await pool.query(
          'SELECT survey_completed FROM waitlist_emails WHERE email = $1',
          [email]
        );
        return NextResponse.json({
          success: true,
          duplicate: true,
          surveyCompleted: Boolean(rows[0]?.survey_completed ?? false),
        });
      }
      
      console.error('Database connection or query error:', dbError);
      return NextResponse.json({ error: 'Failed to save email.' }, { status: 500 });
    }
  } catch (err) {
    console.error('Waitlist route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
