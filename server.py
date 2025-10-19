#!/usr/bin/env python3
import http.server
import socketserver
import os
import gzip
from io import BytesIO

PORT = 5000
DIRECTORY = "."

class OptimizedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        # Smart caching strategy
        path = self.path
        if path.endswith(('.css', '.js', '.jpg', '.png', '.gif', '.svg', '.woff', '.woff2')):
            # Cache static assets for 1 hour in development, longer in production
            self.send_header('Cache-Control', 'public, max-age=3600')
        else:
            # HTML files - no cache for development
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        
        super().end_headers()
    
    def do_GET(self):
        # Handle robots.txt and sitemap.xml
        if self.path == '/robots.txt' or self.path == '/sitemap.xml':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain' if 'robots' in self.path else 'application/xml')
            self.end_headers()
            try:
                with open(self.path.lstrip('/'), 'rb') as f:
                    self.wfile.write(f.read())
            except FileNotFoundError:
                self.send_error(404)
            return
        
        # Default handling
        super().do_GET()
    
    def log_message(self, format, *args):
        # Simplified logging
        print(f"[{self.address_string()}] {format % args}")

Handler = OptimizedHTTPRequestHandler

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

print("=" * 60)
print("🚀 Kokohypes Optimized Server")
print("=" * 60)
print(f"✅ Server running at http://0.0.0.0:{PORT}/")
print(f"✅ Optimizations: Smart Caching, Security Headers, SEO Ready")
print(f"✅ Sitemap: http://0.0.0.0:{PORT}/sitemap.xml")
print(f"✅ Robots: http://0.0.0.0:{PORT}/robots.txt")
print("=" * 60)

with ReusableTCPServer(("0.0.0.0", PORT), Handler) as httpd:
    httpd.serve_forever()
