# Audiomack Mobile Interface

## Overview
A mobile-first music streaming interface inspired by Audiomack, featuring a modern dark theme with orange accents, music player controls, and an intuitive mobile user experience.

## Project Structure
- `index.html` - Main application structure with search, trending tracks, albums, and navigation
- `music.html` - Dedicated music page with 15-item music list in large cover format
- `mixtape.html` - Dedicated mixtape page with all content from music page, customized headings and badges
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
- 2025-10-14: Advertisement Banner & Mixtape Page Updates
  - **Advertisement Banner Enhancement** (MUSIC & MIXTAPE pages):
    - Updated phone number to +2348129440095 with orange color and hover effects
    - Updated website link to www.kokohypes.ng with orange color and hover effects
    - Banner now center-aligned with professional layout (100% width, 40% height)
    - Social media icons resized to 70px × 70px with white logos on dark gray background
    - All contact links have smooth hover transitions with opacity effects
  - **SHOW MORE POSTS Button Styling** (HOME page):
    - Removed thin grey horizontal lines above and below the button
    - Added single thin grey line centered directly underneath the button for cleaner look
  - **MIXTAPE Category Implementation**:
    - Created mixtape.html by duplicating music.html with enhanced formatting
    - Changed "Music Library" to "Mixtape Selections" heading
    - Changed "Top 5 World Most Played" to "Rave of the Moment" section
    - Updated all "Music" badges to "Mixtape" badges throughout the page
    - Updated navigation links across all pages to link to mixtape.html
    - MIXTAPE navigation now fully functional with active state highlighting
- 2025-10-14: GitHub Import to Replit - Fresh Setup Complete
  - Successfully imported project from GitHub repository
  - Installed Python 3.11 module for server runtime
  - Configured Server workflow running on port 5000 with webview output
  - Set up autoscale deployment configuration for production
  - Verified both index.html and music.html pages load correctly
  - Server properly configured with 0.0.0.0 host binding and cache-control headers
  - All static assets (HTML, CSS, JS) serving correctly
  - Project fully operational and ready for use in Replit environment
- 2025-10-14: Sharp Edges Design Updates for MUSIC Page
  - **Top 5 World Most Played Section**: All elements now have border-radius: 0px (sharp edges)
    - Trending list: border-radius: 0px
    - Trending items: border-radius: 0px
    - Trending thumbnails: border-radius: 0px
    - Trending rank boxes: border-radius: 0px
  - **Music Library Heading**: Changed from H3 "Music" to H1 "Music Library" in orange color (#ff6c3e)
  - **Album Covers**: Square design (120px × 120px) with border-radius: 0px maintained
  - **Advertisement Banner**: Sharp edges design with border-radius: 0px
    - White background, no rounded corners
    - Orange "Advertise with us" title in Helvetica font
    - Black body text with orange links (kokohypesng@gmail.com, (+234) 0812 944 0095, Kokohypes.ng)
    - Four 100px × 100px dark gray square social icons (Facebook, Twitter, Instagram, WhatsApp) with border-radius: 0px
    - Icons sized at 45px each
    - Bold "GET THE SONG HERE" footer text in black
  - Consistent sharp edges aesthetic throughout all MUSIC page elements
- 2025-10-13: Music Page Updates and Advertisement Banner
  - **Section Title Update**: Changed "Trending Now" to "Top 5 World Most Played"
  - **Grey Line Separator**: Added thin grey horizontal line below the Top 5 section
  - **Album Covers**: Changed music listing covers back to square (120px × 120px) from rectangles
  - **Pagination Enhancement**: Centered pagination controls with thin grey horizontal lines above and below
  - Removed "More trending posts" link from Top 5 section
  - All elements responsive and clean using HTML/CSS only
- 2025-10-13: Added Trending Now Section to Music Page
  - **Trending Now Section**: Added at the top of the MUSIC category with 5 trending songs
  - **Numbered Rank Boxes**: Orange square badges (1-5) showing each song's ranking
  - **Thumbnails**: 60px square images with gradient backgrounds for each track
  - **Song Information**: Title and artist displayed with text overflow handling
  - **Music Category Heading**: Added H3 "Music" heading before the main music listing
  - **Hover Effects**: Sliding animation on trending items for better interactivity
  - Clean, responsive layout with proper spacing and typography
- 2025-10-13: UI Updates and Enhancements
  - **MUSIC Page Album Covers**: Changed from square (180px × 180px) to rectangle (120px × 180px) for better visual layout
  - **Pagination Added**: Implemented pagination controls on music.html with page numbers, ellipsis, and next arrow button
  - **Top Trending Button**: Replaced "LOAD MORE" with Instagram-style "SHOW MORE POSTS" button
  - **Button Styling**: Black rounded background, white uppercase text, thin grey horizontal lines above and below
  - **Responsive Design**: Pagination and buttons adapt to different screen sizes
  - All changes implemented with HTML and CSS only for clean, maintainable code
- 2025-10-13: GitHub Import to Replit Environment
  - Successfully imported project from GitHub repository
  - Installed Python 3.11 module for server runtime
  - Configured Server workflow running on port 5000 with webview output
  - Set up autoscale deployment configuration for production
  - Verified all pages (index.html, music.html) load correctly
  - Server properly configured with 0.0.0.0 host binding and cache-control headers
  - Project fully operational in Replit environment
- 2025-10-11: Music Page Implementation
  - **Created music.html**: Dedicated music page with 15-item list in large album cover format
  - **Large Square Covers**: 180px x 180px album covers with responsive scaling (140px on <400px, 120px on <350px screens)
  - **Music List Layout**: Album cover on left, song title and artist on right with "Music" badge
  - **Responsive Design**: Mobile-optimized with media queries to prevent overflow on small screens
  - **Navigation Integration**: Added links between HOME and MUSIC pages with active state highlighting
  - **Load More Feature**: Changed "Click to view more 👈" to "LOAD MORE" button that dynamically loads 5 tracks at a time (20 additional tracks available)
  - Clean horizontal dividers between music items for better visual separation
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
