import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export async function POST(req: NextRequest) {
  try {
    interface SurveyBody {
      email: string;
      phone: string;
      usesCurrentSoftware: boolean;
      currentSoftwareLacks?: string | null;
      willingToTry?: boolean | null;
      desiredFeatures?: string | null;
    }
    const body = await req.json() as SurveyBody;
    const { email, phone, usesCurrentSoftware, currentSoftwareLacks, willingToTry, desiredFeatures } = body;
    const usesSoftwareBool: boolean = Boolean(usesCurrentSoftware);
    // willingToTry is only sent on the "No" branch — preserve null when absent
    const willingToTryBool: boolean | null = willingToTry == null ? null : Boolean(willingToTry);

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    // Mock mode when Supabase not configured
    if (!supabaseUrl || supabaseUrl === 'your_supabase_url_here') {
      console.log('[Survey Mock] Response received:', { email, phone, usesSoftwareBool, currentSoftwareLacks, willingToTryBool, desiredFeatures });
      return NextResponse.json({ success: true, mock: true });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase
      .from('waitlist_surveys')
      .insert([{ email, phone, uses_current_software: usesSoftwareBool, current_software_lacks: currentSoftwareLacks, willing_to_try: willingToTryBool, desired_features: desiredFeatures }]);

    if (error) {
      console.error('Supabase survey error:', error);
      return NextResponse.json({ error: 'Failed to save survey.' }, { status: 500 });
    }

    // Flip survey_completed on the waitlist_emails row
    await supabase
      .from('waitlist_emails')
      .update({ survey_completed: true })
      .eq('email', email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Survey route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
