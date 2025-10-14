# DJ Kokolet Music Website (Kokohypes)

## Overview
A mobile-first music streaming website for DJ Kokolet (Kokohypes), featuring a modern dark/light theme with orange accents, music player controls, and an intuitive mobile user experience. The site showcases DJ tracks, trending music, and mixtapes with a sleek, modern interface.

## Recent Changes
**2025-10-14:** Successfully imported GitHub project to Replit environment
- Configured Python HTTP server workflow running on port 5000
- Set up deployment configuration for autoscale production deployment
- Verified all pages (index.html, music.html, mixtape.html) are working correctly
- Updated .gitignore to properly track Replit configuration files
- **Updated Mixtape Player Layout:**
  - Repositioned waveform visualization between track title and controls
  - Replaced single circular play/pause button with standard player controls (Previous, Play/Pause, Next)
  - Added CSS styling for `.player-controls-featured` and `.control-btn-featured`
  - Implemented JavaScript functionality for featured player controls
  - **Fine-tuned player styling:**
    - Set featured player card border-radius to 0px (sharp corners)
    - Reduced waveform visualization height from 60px to 45px
    - Brought time display closer to waveform (margin-top: -2px)
    - Increased player control icons from 20px to 30px
    - Increased play/pause button from 45px to 55px with icon from 18px to 28px
    - Reduced album art size by 30px and centered it (width: calc(100% - 30px))

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