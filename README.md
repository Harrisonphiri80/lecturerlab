# Lecturers Site (proj1)

Tutoring website: a list of lecturer cards; the button "Подробнее и тарифы" opens a modal with education, subjects and prices.

## Stack
- Node.js TODO (`node -v`)
- Vite TODO, React TODO (see `package.json`)
- Plain CSS, fonts: Fraunces and Inter

## Run
```bash
git clone TODO-REPOSITORY-URL
cd proj1
npm install
npm run dev      # open http://localhost:5173
```

## Folder structure
```
src/
├── assets/lecturers/      # lecturer photos (petrov.jpg, ...)
├── components/
│   ├── LecturerCard.jsx   # card in the list
│   └── LecturerModal.jsx  # details + tariffs modal
├── data/lecturers.js      # all data (array of objects)
├── App.jsx
└── main.jsx
```

## Data
All content is in `src/data/lecturers.js` (no backend). One lecturer:
`id`, `gender`, `name`, `photo` (imported image), `education`, `experience`, `degree`, `subjects[]` (`title`, `desc`, `topics[]`), `tariffs[]` (`name`, `price`).
If `photo` is missing, a DiceBear avatar based on `id` is used.

## Routing
TODO: "No router, single page; the modal opens via React state" **or** list the routes.

## Task for the developer (Variant 5)
Lazy-load lecturer photos on the cards with `IntersectionObserver` + `useRef`:
- the photo loads only when the card enters the viewport;
- a placeholder is shown before that;
- the observer is disconnected on unmount.

Where: `src/components/LecturerCard.jsx`.
Tip: test in DevTools → Network (filter "Img", throttle to "Slow 4G") and scroll.
