/* ──────────────────────────────────────────────────────────────
   Fretboard — scale visualiser
   Ported from ../guitar-scale-trainer (browse mode only).
   Standard tuning, 22 frets, horizontal, low E at the bottom.
   ────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // 12 evenly-spaced hues; yellow (D) toned down a touch so it isn't harsh.
  const NOTE_COLORS = NOTES.map((_, i) => {
    const hue = i * 30;
    const soft = hue >= 50 && hue <= 70;
    return `hsl(${hue}, ${soft ? 68 : 74}%, ${soft ? 56 : 60}%)`;
  });

  // Open-string pitch classes, low → high: E A D G B e
  const OPEN = [4, 9, 2, 7, 11, 4];
  const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'e'];

  const SCALES = {
    'Minor Pentatonic': { intervals: [0, 3, 5, 7, 10],        degrees: ['1', 'b3', '4', '5', 'b7'] },
    'Natural Minor':     { intervals: [0, 2, 3, 5, 7, 8, 10],  degrees: ['1', '2', 'b3', '4', '5', 'b6', 'b7'] },
    'Blues':             { intervals: [0, 3, 5, 6, 7, 10],     degrees: ['1', 'b3', '4', 'b5', '5', 'b7'] },
    'Major Pentatonic':  { intervals: [0, 2, 4, 7, 9],         degrees: ['1', '2', '3', '5', '6'] },
    'Major':             { intervals: [0, 2, 4, 5, 7, 9, 11],  degrees: ['1', '2', '3', '4', '5', '6', '7'] },
  };

  const MARKERS = { 3: 1, 5: 1, 7: 1, 9: 1, 12: 2, 15: 1, 17: 1, 19: 1, 21: 1 };
  const MAX_FRET = 22;

  const noteAt = (s, f) => (OPEN[s] + f) % 12;

  function markerHTML(f) {
    if (!MARKERS[f]) return '';
    return MARKERS[f] === 2
      ? '<span class="fb-mdot"></span><span class="fb-mdot"></span>'
      : '<span class="fb-mdot"></span>';
  }

  function cell(cls, col, row, inner) {
    const d = document.createElement('div');
    d.className = cls;
    d.style.gridColumn = col;
    d.style.gridRow = row;
    if (inner != null) d.innerHTML = inner;
    return d;
  }

  /**
   * Render a fretboard into `host` and return a small control API.
   * @param {HTMLElement} host
   */
  function create(host) {
    const board = document.createElement('div');
    board.className = 'fretboard';
    host.innerHTML = '';
    host.appendChild(board);

    // Fret numbers + position markers (top and bottom rows)
    for (let f = 0; f <= MAX_FRET; f++) {
      const col = f + 2;               // col 1 = string label, col 2 = open, 3.. = frets
      const num = f === 0 ? '' : String(f);
      board.appendChild(cell('fb-fnum', col, 1, num));
      board.appendChild(cell('fb-mcell', col, 2, markerHTML(f)));
      board.appendChild(cell('fb-mcell', col, 9, markerHTML(f)));
      board.appendChild(cell('fb-fnum', col, 10, num));
    }

    const dots = [];                   // dots[s][f] → { el, lbl }
    for (let s = 0; s < 6; s++) {
      dots[s] = [];
      const row = 8 - s;               // low E (s0) at the bottom
      board.appendChild(cell('fb-slbl', 1, row, STRING_NAMES[s]));

      for (let f = 0; f <= MAX_FRET; f++) {
        const sc = cell(`fb-scell${f === 0 ? ' fb-open' : ''}`, f + 2, row);
        sc.dataset.s = s;
        sc.dataset.f = f;

        const dot = document.createElement('span');
        dot.className = 'fb-dot';
        const lbl = document.createElement('span');
        lbl.className = 'fb-lbl';

        sc.appendChild(dot);
        sc.appendChild(lbl);
        board.appendChild(sc);
        dots[s][f] = { el: sc, dot, lbl };
      }
    }

    let state = { root: 9, scale: 'Minor Pentatonic', labelMode: 'name' };

    function paint() {
      const def = SCALES[state.scale] || SCALES['Minor Pentatonic'];
      const degByPc = {};
      def.intervals.forEach((iv, i) => { degByPc[(state.root + iv) % 12] = def.degrees[i]; });

      for (let s = 0; s < 6; s++) {
        for (let f = 0; f <= MAX_FRET; f++) {
          const { el, dot, lbl } = dots[s][f];
          const pc = noteAt(s, f);
          const inScale = pc in degByPc;
          const isRoot = pc === state.root && inScale;

          el.classList.toggle('in', inScale);
          el.classList.toggle('root', isRoot);
          dot.style.setProperty('--nc', NOTE_COLORS[pc]);

          if (inScale) {
            lbl.textContent = state.labelMode === 'degree' ? degByPc[pc] : NOTES[pc];
          } else {
            lbl.textContent = NOTES[pc];
          }
        }
      }
    }

    paint();

    return {
      setScale(root, scaleName) {
        if (typeof root === 'number') state.root = ((root % 12) + 12) % 12;
        if (scaleName && SCALES[scaleName]) state.scale = scaleName;
        paint();
      },
      setLabelMode(mode) {
        state.labelMode = mode === 'degree' ? 'degree' : 'name';
        paint();
      },
      get state() { return Object.assign({}, state); },
    };
  }

  window.Fretboard = {
    create,
    NOTES,
    NOTE_COLORS,
    SCALE_NAMES: Object.keys(SCALES),
  };
})();
