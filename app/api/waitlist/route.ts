import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // If Supabase is not configured, log and return success (mock mode)
    if (!supabaseUrl || supabaseUrl === 'your_supabase_url_here') {
      console.log('[Waitlist Mock] Email received:', email);
      return NextResponse.json({ success: true, mock: true, surveyCompleted: false });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase
      .from('waitlist_emails')
      .insert([{ email, survey_completed: false }]);

    if (error) {
      // Handle duplicate email — fetch their survey_completed status
      if (error.code === '23505') {
        const { data } = await supabase
          .from('waitlist_emails')
          .select('survey_completed')
          .eq('email', email)
          .single();
        return NextResponse.json({
          success: true,
          duplicate: true,
          surveyCompleted: Boolean(data?.survey_completed ?? false),
        });
      }
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, surveyCompleted: false });
  } catch (err) {
    console.error('Waitlist route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
