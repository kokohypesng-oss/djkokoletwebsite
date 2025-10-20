Fonts Folder
============

This folder is for custom font files that you want to use in your theme.

How to Add Custom Fonts:
-------------------------

1. Place your font files here (.woff, .woff2, .ttf, .otf formats)
   Example: my-custom-font.woff2

2. Add the @font-face rule to your CSS file (css/main.css):

   @font-face {
       font-family: 'MyCustomFont';
       src: url('../fonts/my-custom-font.woff2') format('woff2'),
            url('../fonts/my-custom-font.woff') format('woff');
       font-weight: normal;
       font-style: normal;
       font-display: swap;
   }

3. Use the font in your CSS:

   body {
       font-family: 'MyCustomFont', -apple-system, sans-serif;
   }

Recommended Font Formats:
-------------------------
- WOFF2 (best compression, modern browsers)
- WOFF (good compression, wider support)
- TTF (fallback for older browsers)

Font Loading Best Practices:
-----------------------------
- Use font-display: swap for better performance
- Only include font weights you actually use
- Consider using Google Fonts API instead for easier implementation
- Keep font file sizes small (under 100KB per file if possible)

Current Setup:
--------------
The theme currently uses system fonts for optimal performance.
Add custom fonts here if you need a specific typeface for your brand.
