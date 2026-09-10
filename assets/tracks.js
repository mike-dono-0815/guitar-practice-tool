/* ──────────────────────────────────────────────────────────────
   Backing-track catalogue.
   To add a track: drop the mp4 in assets/videos/, a poster jpg in
   assets/posters/, then add an entry here. `root` is the pitch class
   (C=0 … B=11). Chords are display-only for now.
   ────────────────────────────────────────────────────────────── */
window.TRACKS = [
  {
    id: 'a-minor',
    title: 'Before the Solo Begins',
    album: 'The Groundwork',
    keyName: 'A Minor',
    root: 9, // A
    defaultScale: 'Minor Pentatonic',
    chords: ['Am', 'F', 'C', 'G'],
    progression: 'i – VI – III – VII',
    video: 'assets/videos/a-minor.mp4',
    poster: 'assets/posters/a-minor.jpg',
  },
  {
    id: 'd-minor',
    title: 'Before the Rain Starts',
    album: 'Under Northern Skies',
    keyName: 'D Minor',
    root: 2, // D
    defaultScale: 'Minor Pentatonic',
    chords: ['Dm', 'B♭', 'F', 'C'],
    progression: 'i – VI – III – VII',
    video: 'assets/videos/d-minor.mp4',
    poster: 'assets/posters/d-minor.jpg',
  },
  {
    id: 'ds-minor',
    title: 'The Last Bastion',
    album: "Titan's Wake",
    keyName: 'D♯ Minor',
    root: 3, // D♯
    defaultScale: 'Minor Pentatonic',
    chords: ['D♯m', 'B', 'F♯', 'C♯'],
    progression: 'i – VI – III – VII',
    video: 'assets/videos/ds-minor.mp4',
    poster: 'assets/posters/ds-minor.jpg',
  },
];

window.getTrack = function (id) {
  return window.TRACKS.find(function (t) { return t.id === id; }) || null;
};
