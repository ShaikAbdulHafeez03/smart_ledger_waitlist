import { Pool } from 'pg';

// Using a global variable to prevent hot-reloads from crashing connection limits in Next.js development
const globalForPg = global as unknown as { pool: Pool, dbInitialized: boolean };

export const pool =
  globalForPg.pool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pool = pool;

export async function ensureDbInitialized() {
  if (globalForPg.dbInitialized || !process.env.DATABASE_URL || process.env.DATABASE_URL.includes('your_postgres_url_here')) {
    return;
  }
  
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist_emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        survey_completed BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist_surveys (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        uses_current_software BOOLEAN,
        current_software_lacks TEXT,
        willing_to_try BOOLEAN,
        desired_features TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_waitlist_surveys_email ON waitlist_surveys(email);
    `);
    
    globalForPg.dbInitialized = true;
    console.log('✅ Database tables automatically initialized/verified.');
  } catch (error) {
    console.error('❌ Failed to auto-initialize database tables:', error);
  }
}
