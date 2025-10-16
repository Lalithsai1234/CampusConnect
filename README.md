# CampusConnect

A lightweight web app that centralizes college event management. Organizers can create events with poster uploads; students can browse, filter, and register via direct links.

## Features
- Organizer dashboard: create/edit events (title, type, dates), upload poster images
- Student experience: browse events, filter by type/college, open registration links
- Flexible data source: local fixtures for quick demos or cloud backends for real data

## Tech Stack (focused)
- React + TypeScript + Vite
- Tailwind CSS
- Supabase (Postgres + Storage) — primary
- Optional fallbacks: Firebase (Firestore/Storage), Cloudinary (image upload)

## Repository layout
```
CampusConnect/
	app/                # Frontend root
		src/
			components/     # UI components (cards etc.)
			pages/          # Pages (Dashboard, Events, Colleges...)
			services/       # Event create/fetch/subscribe logic
			data/           # Local sample data (fixtures)
```

## Getting started (Windows / PowerShell)
Prerequisites: Node 18+ and npm 9+

```
cd app
npm install
copy .env.example .env  # then fill keys (or skip to use local fixtures only)
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

### Environment variables
Create `app/.env` (or copy from `.env.example`) and set values as needed:

```
# Supabase (preferred)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# Firebase (optional fallback)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Cloudinary (optional fallback)
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
```

## Using local fixtures vs cloud
- Local fixtures: pages can render events from `src/data/events.ts` (good for demos with no setup).
- Cloud backends: `src/services/events.ts` supports Supabase (primary) and fallbacks. Provide env keys above.

## Supabase quick setup (dev-friendly)
1) Create a project → copy the Project URL and anon key into `.env`.
2) Storage → create a bucket named `posters` (Public)
3) Row Level Security (Storage → Policies):

Dev-friendly (easier testing):
```
-- Public can read poster files
create policy "Public read posters" on storage.objects
for select to public using (bucket_id = 'posters');

-- Public can upload poster files (dev only)
create policy "Dev public insert posters" on storage.objects
for insert to public with check (bucket_id = 'posters');
```

Production tip: restrict INSERT to authenticated users instead of `public`, and use Supabase Auth.

## Build & preview
```
cd app
npm run build
npm run preview
```

## Notes
- `.env` is ignored by Git. Share `.env.example` for collaborators.
- Images live under `app/Colleges/` for demo; production uploads go to cloud storage.