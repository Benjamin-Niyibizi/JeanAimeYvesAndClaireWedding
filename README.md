# Wedding website (React + Vite)

A one-page wedding invitation: envelope opening, hero, invitation message, live countdown,
our story, event details with dress-code colours, entourage, photo gallery, RSVP form,
and the venue on a Google Map at the bottom of the page, just before the footer.

## Folder structure

```
wedding-website/
├── dist/                    Ready-built site: drag this folder onto Netlify to publish
├── public/favicon.svg
├── src/
│   ├── config.js            ← edit this: names, date, venue, events, entourage, photos
│   ├── styles.css           Colours are CSS variables at the top of .w
│   ├── utils.js             Countdown, Google Maps and calendar links
│   ├── App.jsx              Section order
│   ├── main.jsx
│   ├── assets/              Put your own photos here
│   └── components/
│       ├── Intro.jsx        Envelope with wax seal
│       ├── Hero.jsx
│       ├── Invitation.jsx
│       ├── Countdown.jsx
│       ├── Story.jsx
│       ├── Details.jsx      Ceremony, cocktails, reception, dress code
│       ├── Entourage.jsx
│       ├── Gallery.jsx      Grid with full-screen viewer
│       ├── Rsvp.jsx
│       ├── VenueMap.jsx     Google Map (last section before the footer)
│       ├── Photo.jsx
│       └── Footer.jsx
├── index.html
├── netlify.toml
├── package.json
└── vite.config.js
```

## Run it

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # rebuilds dist/
```

## Customise

1. **Details:** edit `src/config.js`. Keep the timezone offset in `date` (e.g. `+08:00`).
2. **Map:** set `venue.mapQuery` to the name Google Maps shows for your venue, or to
   coordinates like `"14.1153,120.9621"`. The embedded map, "Get directions" and
   "Open in Google Maps" all use it. No API key needed.
3. **Photos:** drop files into `src/assets/`, import them at the top of `config.js`,
   and use the imported name instead of the URL.
4. **Share preview:** update the title and description in `index.html`.
5. **Section order:** rearrange the components in `src/App.jsx`.

## RSVP replies

Create a free form at https://formspree.io and paste its ID into `FORMSPREE_ID` at the top
of `src/components/Rsvp.jsx`. Replies then arrive in your email.

## Publish

- **Quickest:** drag the `dist` folder onto https://app.netlify.com/drop
- **From GitHub:** push the project and import it in Netlify; `netlify.toml` handles the build.
