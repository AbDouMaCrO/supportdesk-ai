-- Run once in the Supabase SQL editor for your project.

create table businesses (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text unique not null,
  api_key       text unique not null,
  plan          text not null default 'starter',
  chat_count    integer not null default 0,
  system_prompt text not null default 'You are a helpful customer support agent.',
  created_at    timestamptz not null default now()
);

create table conversations (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  session_id  text not null,
  messages    jsonb not null default '[]',
  escalated   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (business_id, session_id)
);

create table tickets (
  id              uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  business_id     uuid not null references businesses(id) on delete cascade,
  status          text not null default 'open',
  assignee        text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table kb_files (
  id          uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  filename    text not null,
  content     text not null,
  created_at  timestamptz not null default now()
);

-- Auto-update updated_at on conversations and tickets
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trg_conversations_updated_at
  before update on conversations
  for each row execute function update_updated_at();

create trigger trg_tickets_updated_at
  before update on tickets
  for each row execute function update_updated_at();

-- Service key bypasses RLS; disable it for simplicity on all tables.
alter table businesses    disable row level security;
alter table conversations disable row level security;
alter table tickets       disable row level security;
alter table kb_files      disable row level security;
