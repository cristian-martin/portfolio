# cristian-martin · portfolio

Personal site for Cristian Martin — software engineer in Charlotte, NC.

Single-page React app: hero, selected projects (case-study format), experience, skills, about, contact.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- ESLint (typescript-eslint, react-hooks)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run typecheck
npm run build      # outputs to dist/
npm run preview
```

## Editing content

All copy lives in `src/data/` — no component changes needed for text updates:

| File | Contents |
|---|---|
| `src/data/profile.ts` | Name, tagline, links (GitHub, LinkedIn, résumé), hero and about facts |
| `src/data/projects.ts` | Project case studies — problem / what I built / outcome / stack |
| `src/data/experience.ts` | Work history |
| `src/data/skills.ts` | Skill groups |

To add a project screenshot, drop an image into `public/projects/` and set `image: "/projects/<file>.png"` on the project.

To show the LinkedIn and résumé links, fill in `linkedin` and `resume` in `profile.ts` (put `resume.pdf` in `public/`).

## Structure

```
src/
├── App.tsx               # section order
├── main.tsx
├── index.css             # Tailwind import
├── components/           # one file per section + shared ui.tsx
└── data/                 # all content
```
