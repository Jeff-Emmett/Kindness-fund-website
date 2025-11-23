-- Dropping existing tables to ensure clean slate for new schema structure
DROP TABLE IF EXISTS allocations;
DROP TABLE IF EXISTS acts_of_kindness;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS stream_config;
DROP TYPE IF EXISTS act_category;

-- Updated schema to match new application requirements

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories Enum
CREATE TYPE act_category AS ENUM ('Community', 'Environment', 'Education', 'Health', 'Other');

-- Acts of Kindness Table
CREATE TABLE IF NOT EXISTS acts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    impact TEXT NOT NULL,
    category act_category NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_wallet_address TEXT, -- Optional: if wallet connection is implemented
    status TEXT DEFAULT 'active', -- active, archived, flagged
    
    -- Metrics
    total_allocation NUMERIC DEFAULT 0, -- Total funds allocated
    stream_velocity NUMERIC DEFAULT 0   -- Current rate of funding
);

-- Allocations (Votes/Streams)
CREATE TABLE IF NOT EXISTS allocations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    act_id UUID REFERENCES acts(id) ON DELETE CASCADE,
    allocator_wallet_address TEXT, -- Who allocated
    amount NUMERIC NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster querying of active acts
CREATE INDEX idx_acts_created_at ON acts(created_at DESC);
CREATE INDEX idx_acts_category ON acts(category);

-- Added seed data for the demo
INSERT INTO acts (title, description, impact, category, total_allocation) VALUES 
('Community Garden Cleanup', 'Cleared 500lbs of trash and planted native wildflowers in the downtown empty lot.', 'Local residents and pollinators', 'Environment', 450),
('After-school Coding Club', 'Providing free python lessons to 20 middle school students twice a week.', '20 students + families', 'Education', 890),
('Senior Grocery Delivery', 'Delivered weekly groceries to 15 homebound seniors during the winter storm.', '15 seniors', 'Community', 320),
('Free Mental Health Workshop', 'Hosted a weekend workshop on anxiety management techniques open to all.', '45 attendees', 'Health', 600);
