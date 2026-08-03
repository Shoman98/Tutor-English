create table bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  phone text not null,
  program text not null,
  date date not null,
  time_slot text not null,
  notes text,
  status text default 'pending'
);

alter table bookings enable row level security;

-- Allow anyone to insert a booking
create policy "Anyone can create a booking"
  on bookings for insert
  with check (true);

-- Only authenticated users (Eka) can view bookings
create policy "Authenticated can view bookings"
  on bookings for select
  using (auth.role() = 'authenticated');
