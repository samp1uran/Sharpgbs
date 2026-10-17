create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

revoke all on table public.contacts from anon, authenticated;
grant usage on schema public to service_role;
grant insert on table public.contacts to service_role;
