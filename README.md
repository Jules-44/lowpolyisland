# 🏝️ Low-Poly Island — Atmospheric DnB 3D Adventure

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20Vercel-success?style=for-the-badge&logo=vercel)](https://lowpolyisland.vercel.app)
[![Node Version](https://img.shields.io/badge/Node-%3E%3D20-blue?style=for-the-badge&logo=node.js)](.nvmrc)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black?style=for-the-badge&logo=three.js)](https://threejs.org/)

An atmospheric late-90s / early-2000s low-poly 3D adventure game paired with rolling liquid drum & bass breakbeats, lush ambient pads, and deep sub-bass. Explore tranquil beaches, pine-covered mountain ridges, or switch worlds to cruise an expansive 840m × 840m synthwave metropolis with an elevated Skyway highway.

🎮 **Play Live:** [https://lowpolyisland.vercel.app](https://lowpolyisland.vercel.app)

---

## ✨ Features

- **Multi-World Exploration (`L` to Level Select):**
  - **Level 1: Coastal Haven** — Boardwalk pier, beach bar, swaying palm trees, glowing lighthouse, animated ocean waves, and mountain foothills.
  - **Level 2: Neon Metropolis** — Massive 840m × 840m cyberpunk city grid with 7 avenues, illuminated storefront lobbies, neon blade signs, streetlamps, and a 64m-wide elevated Skyway with 7 on/off ramps.
  - **Level 3: Nordic Fjords** — Towering granite peaks, red stilt fishing cottages (Rorbu) over timber pilings, high arched trestle bridge crossing the sound, alpine switchback trails, and a mountain summit Stave Lookout beacon.
- **Quad Bike 4x4 Off-Road Vehicle (`E` to Mount/Dismount):**
  - Snappy low-speed steering for 90° city street corners and tight alleys.
  - Smooth high-speed drift physics on highways and timber bridges.
  - Stunt launch jumps (`Space`) and suspension pitch/roll terrain tracking.
  - Twin nitro afterburner exhaust flames strictly active during boost (`Shift + W > 14 m/s`).
- **Retro Walkman Audio System:**
  - Procedural liquid drum & bass synthesizer with rolling breaks and warm chords.
  - Full support for dropping your own audio files into `public/audio/`.
  - Authentic cassette tape interface with dual spinning reels and real-time spectrum visualizer.
  - Cassette tape unlock support.
- **Dual Camera System (`V` to Toggle):**
  - Third-person chase camera & immersive first-person cockpit exploration.
  - Zero-click two-finger trackpad camera orbit + optional Pointer Lock mode.
- **Retro Graphics & Atmosphere (`T` to Cycle Skies):**
  - Toggle between authentic PS1 pixelation shader and crisp HD mode.
  - 7 dynamic sky palettes: Golden Hour, Crimson Coral, Tropical Mango, Pastel Peach, Afternoon Gold, Cyber Midnight, and Nordic Twilight.

---

## 🕹️ Controls

| Action | Key / Input |
|---|---|
| **Move / Drive** | `W` `A` `S` `D` or Arrow Keys |
| **Run / Nitro Boost** | `Shift` (Hold for 14 m/s run, tap twice for 24 m/s Zoom, or Quad Nitro 46 m/s) |
| **Jump / Stunt Launch** | `Space` |
| **Camera Orbit** | Two-finger Trackpad Swipe or Click & Drag (or Pointer Lock) |
| **Toggle Camera View** | `V` (3rd Person ⟷ 1st Person) |
| **Interact / Drive Quad** | `E` (Mount / Dismount Quad Bike) |
| **Cycle Sunset Themes** | `T` (6 dynamic sky palettes) |
| **Level Selection Menu** | `L` (Switch between Coastal Haven & Neon Metropolis) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version `20.x` or `22.x` recommended.
- **Package Manager**: `npm` (comes with Node).

If you use `nvm` (Node Version Manager):
```bash
nvm use
# or if not yet installed:
nvm install
```

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Jules-44/lowpolyisland.git
   cd lowpolyisland
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

### Running Locally (Development)

Start the local Vite development server with hot module reloading:

```bash
npm run dev
```

Open your browser at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

### Production Build

To test or verify the production bundle:

```bash
npm run build
npm run preview
```

---

## 🎵 Custom Music Setup

You can drop your own tracks into the game to play through the Walkman!

1. Place your audio files (`.mp3`, `.ogg`, `.wav`, `.m4a`, or `.flac`) into `public/audio/`.
2. Add your track details in **`src/config/audioTracks.js`**:
   ```javascript
   export const CUSTOM_AUDIO_TRACKS = [
     {
       id: 'my_track',
       title: 'MIDNIGHT SUN',
       artist: 'LIQUID SOUNDS',
       file: '/audio/midnight_sun.mp3',
       bpm: 165,
       locked: false, // Set to true if unlocked via cassette tape in the world!
     }
   ];
   ```
   *(Or add them to `public/audio/playlist.json`).*

If no custom audio files are loaded, the game automatically falls back to the built-in procedural DnB audio synthesizer.

---

## 🌐 Deployment

The project builds to standard static files in `dist/`.

### Deploy to Vercel
```bash
npx vercel --prod
```

---

## 🛠️ Tech Stack

- **Core Engine:** [Three.js](https://threejs.org/) (r170)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Audio Engine:** Web Audio API & HTML5 Audio
- **Styling:** Vanilla CSS with retro CRT & PS1 dither filters
- **Hosting:** [Vercel](https://vercel.com/)

---

## 📄 License

MIT License — Feel free to explore, modify, and build upon this world!
