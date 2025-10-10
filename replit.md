# Audiomack Mobile Interface

## Overview
A mobile-first music streaming interface inspired by Audiomack, featuring a modern dark theme with orange accents, music player controls, and an intuitive mobile user experience.

## Project Structure
- `index.html` - Main application structure with search, trending tracks, albums, and navigation
- `styles.css` - Mobile-first CSS styling with Audiomack color scheme (orange/black theme)
- `script.js` - Interactive music player functionality and UI state management
- `server.py` - Python HTTP server to serve the application

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Server**: Python 3.11 with built-in HTTP server
- **Port**: 5000 (configured for Replit environment)

## Features
- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Audiomack-Style UI**: Dark theme with signature orange (#ff6c3e) accents
- **Music Player Controls**: Play/pause, next/previous track functionality
- **Track Management**: Featured tracks, trending lists, and recently played albums
- **Interactive Elements**: Track selection, bottom navigation, and search bar
- **Sticky Navigation**: Fixed header, mini-player, and bottom navigation bar

## Color Scheme
- Primary: #ff6c3e (Audiomack Orange)
- Background: #0a0a0a (Dark Black)
- Secondary Background: #1a1a1a
- Text: #ffffff (Primary), #b3b3b3 (Secondary)

## User Interface Components
1. **Top Search Bar** - Sticky search input for songs, artists, and albums
2. **Trending Section** - Featured track with large play button
3. **Track Lists** - Numbered trending tracks with individual play controls
4. **Album Grid** - Recently played albums in responsive grid layout
5. **Mini Player** - Fixed bottom player showing current track and controls
6. **Bottom Navigation** - Home, Trending, Search, and Library tabs

## Development
The application runs on Python's built-in HTTP server at port 5000. The server includes cache-control headers to ensure updates are immediately visible during development.

## Future Enhancements (Optional)
- Real audio playback integration
- LocalStorage for playlist persistence
- Enhanced accessibility (ARIA labels, keyboard navigation)
- User authentication and personalized playlists

## Deployment
- **Development**: Runs on `python server.py` at port 5000
- **Production**: Configured for autoscale deployment with same command
- Server properly configured for Replit environment with 0.0.0.0 host binding
- Cache-control headers ensure fresh content delivery

## Recent Changes
- 2025-10-10: Refined Sharp Design with Dynamic Branding
  - **Kokohypes Logo**: Resized to 35px with electrifying gradient animation cycling through vibrant colors (#ff6c3e, #ffdd00, #00ff88, #00ddff, #ff00dd) with smooth transitions
  - **Album Covers**: Perfect square (1:1 aspect ratio) with sharp edges (border-radius: 0px) for modern, bold aesthetic
  - **Featured Track**: Sharp square corners (border-radius: 0px) for the featured track card
  - **Track Covers**: All track covers updated to sharp square edges (border-radius: 0px) including featured tracks, trending tracks, and mini-player
  - **Track Lists**: Sharp square corners (border-radius: 0px) for consistent modern design language
  - **Top Rated Artist Section**: Removed scroll arrow for cleaner layout
  - **Media Player**: Fixed position at 70px height, permanently visible at bottom across entire website
  - **Live Traffic Panel**: Repositioned below Newsletter Section, center-aligned with compact design (70% height, 40% width) maintaining 20,000 user display with 3-second auto-refresh
  - **Newsletter Section**: Clean subscription form with name/email inputs, animated submit button with hover effects, and form validation
  - Consistent sharp-edge design language applied throughout the interface for a bold, modern aesthetic
- 2025-10-10: Replit Environment Setup
  - Installed Python 3.11 module
  - Configured workflow for development server (port 5000)
  - Set up deployment configuration for production (autoscale)
  - Verified website functionality with screenshot test
  - Project is fully operational in Replit environment
- 2025-10-10: Further UI refinements and feature additions
  - Integrated theme switcher and 'Kokohypes' branding into search bar
  - Changed hero section to "🔥 Hottest Exclusive Highlight" with Gothic A1 H2 font
  - Reduced featured track box size for better mobile proportions (90px image)
  - Added 10-artist horizontal scrolling grid (4 visible, 6 swipeable)
  - Optimized bottom navigation for auto-fit screen width with text truncation
- 2025-10-10: Enhanced UI with theme switcher and visual improvements
  - Added Audiomack logo in header
  - Implemented light/dark theme toggle with system preference support
  - Applied Gothic A1 font to section headings (Top Trending, Top Rated Artist)
  - Removed track numbers for cleaner Audiomack-style interface
  - Redesigned track tray with rounded cards and better spacing
  - Increased featured track image size (80px → 120px)
  - Updated "See All" to "Click to view more 👈" at bottom right
  - Enhanced track play buttons with solid orange style
- 2025-10-10: Complete redesign to Audiomack mobile interface
- Created mobile-first responsive design with orange/black theme
- Implemented interactive music player with track selection
- Added bottom navigation and mini-player controls
- Configured for Replit deployment on port 5000
