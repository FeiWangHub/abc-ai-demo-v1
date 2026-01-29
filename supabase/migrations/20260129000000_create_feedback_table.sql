-- create table
CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    email VARCHAR(255),
    requirement TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'Other',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- create index for performance
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_category ON feedback(category);
-- grant permissions
GRANT SELECT ON feedback TO anon;
GRANT ALL PRIVILEGES ON feedback TO authenticated;
GRANT ALL PRIVILEGES ON feedback TO service_role;