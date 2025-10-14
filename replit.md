# Audiomack Mobile Interface

## Overview
A mobile-first music streaming interface inspired by Audiomack, featuring a modern dark theme with orange accents, music player controls, and an intuitive mobile user experience. The project aims to provide a robust and engaging platform for music discovery and playback, with potential for future expansion into advanced features like real audio playback and user authentication.

## User Preferences
No specific user preferences were provided in the original document.

## System Architecture
The application is built with a mobile-first design philosophy, ensuring optimal viewing and interaction across various mobile devices. The UI adheres to an Audiomack-style dark theme with signature orange accents (`#ff6c3e`) for a consistent and modern aesthetic.

**Core Features:**
- **Navigation:** Sticky top search bar, mini-player, and bottom navigation (Home, Trending, Search, Library) for easy access.
- **Music Playback:** Interactive music player controls including play/pause, next/previous track functionality, and a dedicated featured player with waveform visualization.
- **Content Display:** Sections for trending tracks, featured tracks, "Rave of the Moment" mixtapes, and recently played albums presented in responsive grid and list layouts.
- **Dynamic Content:** Mixtape-specific pages with customized headings and badges, and an advertisement banner with dynamic contact information.
- **Interactive Elements:** Track selection, share functionality with social media integration, and download capability (configured for demo mode).
- **Design Language:** A "sharp edges" design approach is applied consistently, featuring `border-radius: 0px` for album covers, track cards, and UI elements to achieve a bold, modern look.
- **Branding:** Dynamic Kokohypes logo with an electrifying gradient animation.

**Technical Implementation:**
- **Frontend:** Developed using HTML5, CSS3, and JavaScript.
- **Icons:** Font Awesome 6.4.0 (CDN) is used for iconography.
- **Server:** A Python 3.11 built-in HTTP server (`server.py`) serves the application, configured to run on port 5000 and bind to `0.0.0.0` for Replit environment compatibility.
- **Deployment:** Configured for autoscale deployment in a production environment with cache-control headers to ensure fresh content delivery.

## External Dependencies
- **Font Awesome 6.4.0 (CDN):** Used for icons throughout the interface.