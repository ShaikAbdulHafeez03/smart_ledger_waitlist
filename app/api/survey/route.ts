import { NextRequest, NextResponse } from 'next/server';
import { pool, ensureDbInitialized } from '../../lib/db';

export async function POST(req: NextRequest) {
  try {
    await ensureDbInitialized();
    interface SurveyBody {
      email: string;
      name?: string | null;
      usesCurrentSoftware: boolean;
      currentSoftwareLacks?: string | null;
      willingToTry?: boolean | null;
      desiredFeatures?: string | null;
    }
    const body = await req.json() as SurveyBody;
    const { email, name, usesCurrentSoftware, currentSoftwareLacks, willingToTry, desiredFeatures } = body;
    const usesSoftwareBool: boolean = Boolean(usesCurrentSoftware);
    const willingToTryBool: boolean | null = willingToTry == null ? null : Boolean(willingToTry);

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('your_postgres_url_here')) {
      console.log('[Survey Mock] Response received:', { email, name, usesSoftwareBool, currentSoftwareLacks, willingToTryBool, desiredFeatures });
      return NextResponse.json({ success: true, mock: true });
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      
      // Insert survey data into waitlist_surveys
      await client.query(`
        INSERT INTO waitlist_surveys (
          email, name, uses_current_software, current_software_lacks, willing_to_try, desired_features
        ) VALUES ($1, $2, $3, $4, $5, $6)
      `, [email, name || null, usesSoftwareBool, currentSoftwareLacks || null, willingToTryBool, desiredFeatures || null]);

      // Flip survey_completed on waitlist_emails
      await client.query(
        'UPDATE waitlist_emails SET survey_completed = true WHERE email = $1',
        [email]
      );

      await client.query('COMMIT');
      return NextResponse.json({ success: true });
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Postgres survey insert error:', err);
      return NextResponse.json({ error: 'Failed to save survey.' }, { status: 500 });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Survey route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
