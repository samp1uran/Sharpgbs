create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  duration text not null,
  fee text not null,
  mode text not null,
  audience text not null,
  curriculum text[] not null default '{}',
  is_visible boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;

revoke all on table public.courses from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.courses to service_role;

insert into public.courses (slug, title, description, duration, fee, mode, audience, curriculum, display_order)
select
  'zero-to-hero',
  'Zero to Hero',
  'A step-by-step program that takes you from the basics to job-ready, practical skills with guidance from the Sharp GBS team.',
  '2.5 months',
  '₹5,000',
  'Online & Offline',
  '10th/12th pass students',
  array['Skills used daily in the industry'],
  1
where not exists (select 1 from public.courses);
