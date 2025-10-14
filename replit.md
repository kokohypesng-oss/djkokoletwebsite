# DJ Kokolet Music Website (Kokohypes)

## Overview
A mobile-first music streaming website for DJ Kokolet (Kokohypes), featuring a modern dark/light theme with orange accents, music player controls, and an intuitive mobile user experience. The site showcases DJ tracks, trending music, and mixtapes with a sleek, modern interface.

## Recent Changes
**2025-10-14:** Successfully imported GitHub project to Replit environment
- Configured Python HTTP server workflow running on port 5000
- Set up deployment configuration for autoscale production deployment
- Verified all pages (index.html, music.html, mixtape.html) are working correctly
- Updated .gitignore to properly track Replit configuration files

**2025-10-14 - LATEST:** Refined MIXTAPE Rave of the Moment Section
- **Player Controls Adjustments:**
  - Play/Pause button enlarged: 75px (from 65px) with 32px icon
  - Control buttons gap reduced: 10px (from 20px)
  - Previous/Next buttons: 30px icons with 8px padding
- **Backdrop & Container Updates:**
  - Backdrop width: calc(100% - 60px) with auto-centering (reduced by additional 20px)
  - Backdrop margins: 15px auto 0 (center-aligned horizontally)
  - Bottom border-radius: 40px (from 20px) for pronounced corners
- **Action Buttons Refinements:**
  - Action buttons width: calc(100% - 20px) with auto-centering
  - Gap between action buttons: 10px (from 15px)
  - Maintains 50px height, 22px icons, 11px labels
- **Track Title & Spacing:**
  - Changed track title from H2 to H3 (maintaining 25px font size)
  - Album cover bottom margin: 10px gap to title
  - Track title top margin: 10px gap from album
  - Track title padding: 0 15px 10px (removed top padding)
- **Visual Alignment:**
  - All containers (backdrop, actions, album, waveform) center-aligned
  - Bottom placement preserved while center-aligning containers
  - Consistent 10px gaps throughout the featured player section
  - Created detailed component documentation in MIXTAPE_RAVE_OF_THE_MOMENT_DETAILS.md

- **Previous Updates:**
  - Waveform height: fixed 20px, width matches album cover
  - Theme-aware backdrop: grey (#4a4a4a) in light mode, light grey (#cccccc) in dark mode
  - Navigation updated: "MyXZone" → "Booking", "SEARCH" → "K/Award"
  - Album cover: 16:9 aspect ratio, calc(100% - 60px) width
  - Player card: border-radius 0px (sharp edges aesthetic)
  - Time display: margin-top -12px (closer to waveform)

## User Preferences
No specific user preferences documented yet.

## Project Architecture

### Structure
```
.
├── index.html          # Homepage with featured tracks and trending music
├── music.html          # Top 5 World Most Played tracks
├── mixtape.html        # Rave of the Moment featured player with waveform
├── script.js           # JavaScript for interactivity and music player controls
├── styles.css          # Responsive styling with dark/light theme support
├── server.py           # Python HTTP server (port 5000)
└── replit.md          # This documentation file
```

### Core Features
- **Navigation:** Sticky top search bar, mini-player, and bottom navigation (Home, Music, Mixtape, MyXZone, Search, More)
- **Theme Toggle:** Light/dark mode with localStorage persistence
- **Music Player:** Interactive controls (play/pause, next/previous) with track management
- **Featured Content:** 
  - Homepage: Hottest Exclusive Highlight, Top Trending tracks, Top Rated Artists
  - Music page: Top 5 World Most Played ranking
  - Mixtape page: Rave of the Moment with waveform visualization
- **Interactive Elements:** 
  - Track selection and playback
  - "Show More" functionality to load additional tracks
  - WhatsApp integration for contact and sharing
  - Newsletter subscription form
  - Live traffic counter
  - Social media share modal (Facebook, Twitter, WhatsApp, Telegram, LinkedIn, Reddit)
- **Design Language:** Sharp edges design with `border-radius: 0px` for a bold, modern aesthetic
- **Branding:** Kokohypes logo with animated gradient effect

### Technical Implementation
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Icons:** Font Awesome 6.4.0 (CDN)
- **Server:** Python 3.12 built-in HTTP server
  - Runs on port 5000
  - Binds to 0.0.0.0 for Replit compatibility
  - Implements cache-control headers (no-cache, no-store, must-revalidate)
- **Deployment:** Configured for autoscale deployment with production-ready settings

### Replit Configuration
- **Workflow:** "Server" runs `python3 server.py` on port 5000 with webview output
- **Deployment Target:** Autoscale (stateless web application)
- **Port Configuration:** Frontend on 5000 (as required by Replit environment)

## External Dependencies
- **Font Awesome 6.4.0 (CDN):** Icon library for UI elements