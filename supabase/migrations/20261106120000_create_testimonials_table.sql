create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  feedback text not null,
  is_visible boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;

revoke all on table public.testimonials from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.testimonials to service_role;

insert into public.testimonials (name, feedback, display_order)
select seed.name, seed.feedback, seed.display_order
from (
  values
    ('Rohit Tiwari', 'Sharp GBS has transformed the way we manage our operations. Their service is prompt, professional, and always reliable.', 1),
    ('Priya Mehta', 'Impressive team and even better results. Sharp GBS truly understands what businesses need and delivers beyond expectations.', 2),
    ('Janvi', 'Highly recommend Sharp GBS! Their attention to detail and support made a huge difference in our workflow.', 3),
    ('Satvir Singh', 'Their 24/7 technical assistance and prompt bug resolution saved our product launch window. You can always count on the Sharp GBS support team.', 4),
    ('Gobind Glass House', 'Sharp GBS provided professional support and helped us find the right solutions for our business needs.', 5),
    ('Ram Singh', 'Working with the team at Sharp GBS has been a game-changer for our organization. They took the time to deeply understand our challenges and delivered tailored solutions that perfectly aligned with our business goals.', 6),
    ('Karamjeet Singh', 'Saddi Shop lai Sharp GBS naal judna bilkul sahi decision si. Ohna ne ground level te aake sadde business challenges nu samjheya. The tailored solutions they delivered were spot on, te sadde long-term business goals naal perfectly align kar gaye. Truly a game-changer team jithe tusi poora trust kar sakde ho.', 7)
) as seed(name, feedback, display_order)
where not exists (select 1 from public.testimonials);
