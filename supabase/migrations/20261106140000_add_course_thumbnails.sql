alter table public.courses
  add column if not exists thumbnail_url text;

update public.courses
set thumbnail_url = '/course-thumbnails/00000000-0000-4000-8000-000000000001.png'
where slug = 'zero-to-hero' and thumbnail_url is null;
