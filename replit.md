# DJ Kokolet Music Website (Kokohypes)

## Overview
A mobile-first music streaming website for DJ Kokolet (Kokohypes). The platform features a modern dark/light theme with orange accents, an intuitive music player, and a user-friendly mobile experience. It showcases DJ tracks, trending music, and mixtapes, aiming to provide a sleek and engaging interface for music enthusiasts.

## User Preferences
No specific user preferences documented yet.

## System Architecture

### UI/UX Decisions
- **Design Language:** Modern digital aesthetic with sharp corners (`border-radius: 0px`) applied consistently across elements for a bold, angular look.
- **Theming:** Dark/light mode support with orange accent colors and automatic persistence via `localStorage`.
- **Mobile-First:** Designed with a strong emphasis on responsive layouts and touch-friendly interactions.
- **Typography:** Specific font sizing and weighting for titles and artist names to ensure readability and visual hierarchy.
- **Interactive Elements:** Animated success overlays, countdown timers, rainbow focus effects on inputs, and ripple animations for buttons.
- **Branding:** Kokohypes logo with an animated gradient effect.

### Technical Implementations
- **Frontend:** HTML5, CSS3, and Vanilla JavaScript for dynamic content and interactivity.
- **Navigation:** Sticky top search bar, a persistent mini-player, and a bottom navigation bar for core sections (Home, Music, Mixtape, Booking, K/AWARD).
- **Content Management:**
    - Dynamic content loading with "Show More" functionality.
    - Automatic tag extraction and generation for content pages.
    - Audio file auto-detection to display relevant player controls (Play, Share, Download).
    - URL routing with content data storage in `sessionStorage` and `history.pushState` for clean URLs.
- **Music Player:** Features play/pause, next/previous controls, track information display, and waveform visualization (for Rave of the Moment).
- **Booking System:** 
    - **Phone Dialer Interface (UPDATED - 2025-10-19):** Initial screen with welcome message, WhatsApp number input, and realistic 3x4 dial pad
    - Theme-aware rectangular dial buttons (50px height) with gradient backgrounds and interactive animations
    - Bottom row arrangement: GO (bottom-left with vibrant gradients), 0 (center), Backspace (bottom-right for deleting digits)
    - GO button with lemon gradient and bright green glow (light mode) / yellow gradient with deep golden glow (dark mode)
    - Natural spacing: 20px margin-bottom on welcome, input, and dial pad sections for natural content flow without column structures
    - **User Guide Box:** Rectangular info box (100% width, min 50px height) below keypad with step-by-step booking instructions
      - Light mode: Black background with orange text
      - Dark mode: Orange background with black text
      - 5px padding, left-aligned text with clear instructions for using the booking interface
    - Flip-up 3D transition (600ms) reveals booking form after validation when 10+ characters entered
    - WhatsApp number stored in sessionStorage for form submission
    - **Booking Form:** Comprehensive form with fields for event details, client information, and direct WhatsApp integration for submission.
- **Pagination:** Automatic pagination for track listings, dynamically calculating and displaying page numbers.
- **Server:** Python 3.12 built-in HTTP server running on port 5000, configured with `cache-control` headers for no-caching in development.

### Feature Specifications
- **Homepage:** Features "Hottest Exclusive Highlight" and "Top Rated Artists."
  - **Top Trending (UPDATED - 2025-10-19):** Dynamically pulls new posts from Music and Mixtape categories
    - Content rendered from musicPosts and mixtapePosts arrays filtered by isNew flag
    - Category badges display source category (Music or Mixtape) for each track
    - Initial display shows 5 tracks with "SHOW MORE POSTS" to load additional content
    - All content dynamically generated via JavaScript, no static HTML
- **Music Page (UPDATED - 2025-10-19):** Displays "Top 20 Most Played Worldwide" tracks in a 2-column responsive grid with ranking badges
  - Music cards use 1:1 aspect ratio (aspect-ratio: 1/1) with 100% width for perfect square tiles
  - Cards have reduced gap (20px) with bottom cards having -40px margin-top for a tighter layout
  - Includes a "SEE MORE POSTS" link to a dedicated page
- **Mixtape Page:** Showcases "Rave of the Moment" with an enlarged player, waveform visualization, and prominent download/share options.
- **Informative Page:** Generic content detail page displaying featured images, extracted tags, and actions (Play, Share, Download) based on content type.
- **Booking Page:** Features a phone dialer interface as the entry point with WhatsApp number collection, followed by a comprehensive booking form that integrates directly with WhatsApp.
- **K/AWARD Page (UPDATED - 2025-10-19):** A dedicated page for the Kokohypes Award 2nd Edition featuring:
  - Left-aligned text with 30px padding
  - "Get ready for the" (40px), "KOKO" (105px black), "HYPES" (105px black), "AWARD" (99px orange), "2nd Edition" (52px)
  - Right-aligned "GET NOTIFY" button that links to WhatsApp (+2348129440095) with pre-filled message

## External Dependencies
- **Font Awesome 6.4.0 (CDN):** Used for various icons across the website.
- **WhatsApp API:** Integrated for direct booking form submissions and sharing functionalities.