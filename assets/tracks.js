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
  // TODO: key, chords and album below are placeholder guesses — verify.
  {
    id: 'the-long-miles-home',
    title: 'The Long Miles Home',
    album: 'The Long Miles Home',
    keyName: 'G Major',
    root: 7, // G
    defaultScale: 'Major Pentatonic',
    chords: ['G', 'D', 'Em', 'C'],
    progression: 'I – V – vi – IV',
    video: 'assets/videos/the-long-miles-home.mp4',
    poster: 'assets/posters/the-long-miles-home.jpg',
  },
  {
    id: 'the-open-room',
    title: 'The Open Room',
    album: 'The Open Room',
    keyName: 'C Major',
    root: 0, // C
    defaultScale: 'Major Pentatonic',
    chords: ['C', 'Am', 'F', 'G'],
    progression: 'I – vi – IV – V',
    video: 'assets/videos/the-open-room.mp4',
    poster: 'assets/posters/the-open-room.jpg',
  },
  {
    id: 'the-meridian-drift',
    title: 'The Meridian Drift',
    album: 'The Meridian Drift',
    keyName: 'B Minor',
    root: 11, // B
    defaultScale: 'Minor Pentatonic',
    chords: ['Bm', 'G', 'D', 'A'],
    progression: 'i – VI – III – VII',
    video: 'assets/videos/the-meridian-drift.mp4',
    poster: 'assets/posters/the-meridian-drift.jpg',
  },
  {
    id: 'midnight-at-the-mesa',
    title: 'Midnight at the Mesa',
    album: 'Midnight at the Mesa',
    keyName: 'E Minor',
    root: 4, // E
    defaultScale: 'Minor Pentatonic',
    chords: ['Em', 'C', 'G', 'D'],
    progression: 'i – VI – III – VII',
    video: 'assets/videos/midnight-at-the-mesa.mp4',
    poster: 'assets/posters/midnight-at-the-mesa.jpg',
  },
];

window.getTrack = function (id) {
  return window.TRACKS.find(function (t) { return t.id === id; }) || null;
};
