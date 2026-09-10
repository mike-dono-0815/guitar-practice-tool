# Guitar Practice Tool

A small static site for practising scales over looping backing-track videos.

- **Landing page** (`index.html`) — a gallery of backing tracks, each showing its
  key and chord progression.
- **Practice page** (`practice.html?track=<id>`) — the looping video with standard
  playback controls, plus a fretboard (standard tuning, 22 frets) visualising the
  scale to solo with. The key is locked to the track; the scale is switchable
  between Minor Pentatonic, Natural Minor, Blues, Major Pentatonic and Major.
  Note labels can be shown as note names or scale degrees.

## Adding a track

1. Put the video at `assets/videos/<id>.mp4`.
2. Grab a poster frame:
   `ffmpeg -ss 3 -i assets/videos/<id>.mp4 -frames:v 1 -q:v 3 assets/posters/<id>.jpg`
3. Add an entry to `window.TRACKS` in `assets/tracks.js` (`root` is the pitch
   class: C=0 … B=11).

## Deploy (GitHub Pages)

Push to the `guitar-practice-tool` repo and enable Pages on the default branch.
Served at `https://mike-dono-0815.github.io/guitar-practice-tool/`.

Chord progressions are currently common placeholders (i–VI–III–VII); replace the
`chords` arrays in `assets/tracks.js` with the real progressions when available.
