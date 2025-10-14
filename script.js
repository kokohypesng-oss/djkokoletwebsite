function getPreferredTheme() {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
        return storedTheme;
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
}

function setTheme(theme, persist = false) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
        localStorage.setItem('theme', theme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme, true);
}

setTheme(getPreferredTheme(), false);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light', false);
    }
});

const tracks = [
    { id: 1, title: 'Midnight Dreams', artist: 'The Soundwaves' },
    { id: 2, title: 'Electric Soul', artist: 'Beat Masters' },
    { id: 3, title: 'Rhythm & Flow', artist: 'Urban Collective' },
    { id: 4, title: 'Sunset Boulevard', artist: 'DJ Kokolet' },
    { id: 5, title: 'Neon Nights', artist: 'Electro Vibe' }
];

let currentTrack = null;
let isPlaying = false;

const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackItems = document.querySelectorAll('.track-item');
let trackPlayBtns = document.querySelectorAll('.track-play-btn');
const playerDetails = document.querySelector('.player-details');
const featuredPlayBtn = document.querySelector('.featured-track .play-btn');

function updatePlayerUI(track) {
    playerDetails.querySelector('h4').textContent = track.title;
    playerDetails.querySelector('p').textContent = track.artist;
}

function updatePlayPauseIcon() {
    const icon = playPauseBtn.querySelector('i');
    if (isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

function updateTrackPlayButtons() {
    trackPlayBtns.forEach((btn, index) => {
        const icon = btn.querySelector('i');
        if (currentTrack && currentTrack.id === index + 1 && isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    });
}

function playTrack(trackId) {
    currentTrack = tracks.find(t => t.id === trackId);
    isPlaying = true;
    updatePlayerUI(currentTrack);
    updatePlayPauseIcon();
    updateTrackPlayButtons();
}

function togglePlayPause() {
    if (!currentTrack) {
        playTrack(1);
    } else {
        isPlaying = !isPlaying;
        updatePlayPauseIcon();
        updateTrackPlayButtons();
    }
}

function playNext() {
    if (!currentTrack) {
        playTrack(1);
        return;
    }
    
    const nextId = currentTrack.id < tracks.length ? currentTrack.id + 1 : 1;
    playTrack(nextId);
}

function playPrevious() {
    if (!currentTrack) {
        playTrack(tracks.length);
        return;
    }
    
    const prevId = currentTrack.id > 1 ? currentTrack.id - 1 : tracks.length;
    playTrack(prevId);
}

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
}
if (nextBtn) {
    nextBtn.addEventListener('click', playNext);
}
if (prevBtn) {
    prevBtn.addEventListener('click', playPrevious);
}

if (featuredPlayBtn) {
    featuredPlayBtn.addEventListener('click', () => {
        currentTrack = { id: 0, title: 'Summer Vibes 2025', artist: 'DJ Kokolet' };
        isPlaying = true;
        updatePlayerUI(currentTrack);
        updatePlayPauseIcon();
    });
}

trackItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (!e.target.closest('.track-play-btn')) {
            playTrack(index + 1);
        }
    });
});

trackPlayBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (currentTrack && currentTrack.id === index + 1) {
            togglePlayPause();
        } else {
            playTrack(index + 1);
        }
    });
});

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.getAttribute('href') === '#') {
            e.preventDefault();
        }
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.borderColor = 'var(--primary-color)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.borderColor = 'transparent';
    });
}

document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        const artist = card.querySelector('p').textContent;
        currentTrack = { id: 0, title, artist };
        isPlaying = true;
        if (playerDetails) {
            updatePlayerUI(currentTrack);
            updatePlayPauseIcon();
        }
    });
});

const moreBtn = document.getElementById('more-btn');
const moreDropdown = document.getElementById('more-dropdown');

if (moreBtn && moreDropdown) {
    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        moreDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!moreBtn.contains(e.target) && !moreDropdown.contains(e.target)) {
            moreDropdown.classList.remove('active');
        }
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            console.log('Selected:', item.textContent);
            moreDropdown.classList.remove('active');
        });
    });
}

const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappDropdown = document.getElementById('whatsapp-dropdown');
const contactUsBtn = document.getElementById('contact-us');
const sharePostBtn = document.getElementById('share-post');

if (whatsappBtn && whatsappDropdown) {
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        whatsappDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!whatsappBtn.contains(e.target) && !whatsappDropdown.contains(e.target)) {
            whatsappDropdown.classList.remove('active');
        }
    });
}

if (contactUsBtn) {
    contactUsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const phoneNumber = '1234567890';
        const message = encodeURIComponent('Hello, I would like to contact you.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        if (whatsappDropdown) {
            whatsappDropdown.classList.remove('active');
        }
    });
}

if (sharePostBtn) {
    sharePostBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentUrl = window.location.href;
        const shareText = encodeURIComponent('Check out this awesome music on Kokohypes!');
        window.open(`https://wa.me/?text=${shareText}%20${encodeURIComponent(currentUrl)}`, '_blank');
        if (whatsappDropdown) {
            whatsappDropdown.classList.remove('active');
        }
    });
}

const trafficCountElement = document.getElementById('traffic-count');

if (trafficCountElement) {
    let trafficCount = 20000;

    function updateTrafficCount() {
        const variation = Math.floor(Math.random() * 100) - 50;
        trafficCount = Math.max(19900, Math.min(20100, trafficCount + variation));
        trafficCountElement.textContent = trafficCount.toLocaleString();
        
        const bars = document.querySelectorAll('.traffic-bar');
        bars.forEach(bar => {
            const newHeight = Math.random() * 50 + 40;
            bar.style.height = newHeight + '%';
        });
    }

    setInterval(updateTrafficCount, 3000);
}

const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(newsletterForm);
        const name = newsletterForm.querySelector('input[type="text"]').value;
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        alert(`Thank you ${name}! You've been subscribed successfully. Check ${email} for updates!`);
        newsletterForm.reset();
    });
}

const additionalTracks = [
    { title: 'Cosmic Dreams', artist: 'Star Gazer' },
    { title: 'Ocean Waves', artist: 'Aqua Beats' },
    { title: 'Desert Storm', artist: 'Sandy Vibes' },
    { title: 'Mountain High', artist: 'Peak Sounds' },
    { title: 'City Lights', artist: 'Urban Echo' },
    { title: 'Forest Rain', artist: 'Nature Flow' },
    { title: 'Sunset Paradise', artist: 'Golden Hour' },
    { title: 'Moonlight Sonata', artist: 'Night Dreams' },
    { title: 'Thunder Beats', artist: 'Storm Chasers' },
    { title: 'Crystal Clear', artist: 'Pure Sound' },
    { title: 'Neon Paradise', artist: 'Retro Wave' },
    { title: 'Digital Love', artist: 'Cyber Dreams' },
    { title: 'Summer Breeze', artist: 'Chill Vibes' },
    { title: 'Winter Wonderland', artist: 'Snow Beats' },
    { title: 'Spring Awakening', artist: 'Fresh Start' },
    { title: 'Autumn Leaves', artist: 'Fall Sounds' },
    { title: 'Tropical Paradise', artist: 'Island Beats' },
    { title: 'Arctic Freeze', artist: 'Ice Cold' },
    { title: 'Volcano Eruption', artist: 'Hot Lava' },
    { title: 'Rainbow Colors', artist: 'Spectrum Sound' }
];

let loadedTracksCount = 0;

const loadMoreBtn = document.getElementById('load-more-trending');
const trendingTracksContainer = document.getElementById('trending-tracks');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        const tracksToLoad = additionalTracks.slice(loadedTracksCount, loadedTracksCount + 5);
        const baseLength = tracks.length;
        
        tracksToLoad.forEach((track, index) => {
            const trackId = baseLength + index + 1;
            const trackItem = document.createElement('div');
            trackItem.className = 'track-item';
            trackItem.setAttribute('data-track', trackId);
            
            trackItem.innerHTML = `
                <div class="track-cover-small">
                    <i class="fas fa-music"></i>
                </div>
                <div class="track-details">
                    <h4>${track.title}</h4>
                    <p>${track.artist}</p>
                </div>
                <button class="track-play-btn">
                    <i class="fas fa-play"></i>
                </button>
            `;
            
            trendingTracksContainer.appendChild(trackItem);
            
            tracks.push({ id: trackId, title: track.title, artist: track.artist });
            
            trackItem.addEventListener('click', (e) => {
                if (!e.target.closest('.track-play-btn')) {
                    playTrack(trackId);
                }
            });
            
            const playBtn = trackItem.querySelector('.track-play-btn');
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                if (currentTrack && currentTrack.id === trackId) {
                    togglePlayPause();
                } else {
                    playTrack(trackId);
                }
            });
        });
        
        trackPlayBtns = document.querySelectorAll('.track-play-btn');
        
        loadedTracksCount += tracksToLoad.length;
        
        if (loadedTracksCount >= additionalTracks.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Waveform visualization for featured player
function drawWaveform() {
    const canvas = document.getElementById('waveform-canvas');
    const albumArt = document.querySelector('.featured-album-art');
    if (!canvas || !albumArt) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Get album art width, use fixed 20px height
    const albumRect = albumArt.getBoundingClientRect();
    const targetWidth = albumRect.width;
    const targetHeight = 20;
    
    // Set canvas size - width matches album, height is 20px
    canvas.width = targetWidth * dpr;
    canvas.height = targetHeight * dpr;
    ctx.scale(dpr, dpr);
    
    const width = targetWidth;
    const height = targetHeight;
    const bars = 150;
    const barWidth = width / bars;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Generate waveform bars
    for (let i = 0; i < bars; i++) {
        const barHeight = Math.random() * height * 0.8 + height * 0.1;
        const x = i * barWidth;
        const y = (height - barHeight) / 2;
        
        // Color gradient - orange for played portion, gray for remaining
        const playProgress = 0.15; // 0:04 / 2:56 ≈ 0.023 but let's show more
        if (i / bars < playProgress) {
            ctx.fillStyle = '#ff6c3e';
        } else {
            ctx.fillStyle = '#444444';
        }
        
        ctx.fillRect(x, y, barWidth - 1, barHeight);
    }
}

// Initialize waveform on page load
if (document.getElementById('waveform-canvas')) {
    // Wait for album art to load before drawing waveform
    setTimeout(drawWaveform, 100);
    window.addEventListener('resize', drawWaveform);
}

// Share Modal Functionality
const shareModal = document.getElementById('share-modal');
const shareBtnFeatured = document.getElementById('share-btn-featured');
const closeShareModal = document.getElementById('close-share-modal');
const shareOptions = document.querySelectorAll('.share-option');

if (shareBtnFeatured && shareModal) {
    // Open share modal
    shareBtnFeatured.addEventListener('click', () => {
        shareModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal on close button click
    if (closeShareModal) {
        closeShareModal.addEventListener('click', () => {
            shareModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal on background click
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle share options
    shareOptions.forEach(option => {
        option.addEventListener('click', () => {
            const platform = option.getAttribute('data-platform');
            const trackTitle = 'Promphizy | Local Way';
            const pageUrl = window.location.href;
            const shareText = `Check out "${trackTitle}" on Kokohypes!`;
            
            let shareUrl = '';

            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                    break;
                case 'reddit':
                    shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(trackTitle)}`;
                    break;
                case 'copy':
                    // Copy link to clipboard
                    navigator.clipboard.writeText(pageUrl).then(() => {
                        // Visual feedback
                        const originalText = option.querySelector('span').textContent;
                        option.querySelector('span').textContent = 'Copied!';
                        option.style.borderColor = '#25d366';
                        
                        setTimeout(() => {
                            option.querySelector('span').textContent = originalText;
                            option.style.borderColor = '';
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy link:', err);
                        alert('Failed to copy link. Please try again.');
                    });
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Download Functionality
const downloadBtnFeatured = document.getElementById('download-btn-featured');

if (downloadBtnFeatured) {
    downloadBtnFeatured.addEventListener('click', () => {
        const trackTitle = 'Promphizy - Local Way';
        const fileName = `${trackTitle}.mp3`;
        
        // TODO: Replace with actual audio file URL from your server/CDN
        // Example: const audioUrl = '/media/tracks/promphizy-local-way.mp3';
        const audioUrl = null; // Set to actual file URL when available
        
        if (!audioUrl) {
            // Demo mode notification
            alert('Download functionality is ready! Please configure the audio file URL in the code to enable downloads.');
            return;
        }
        
        // Production download implementation
        fetch(audioUrl)
            .then(response => {
                if (!response.ok) throw new Error('Download failed');
                return response.blob();
            })
            .then(blob => {
                // Create download link
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                link.style.display = 'none';
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up blob URL
                window.URL.revokeObjectURL(url);
                
                // Visual feedback
                const originalContent = downloadBtnFeatured.innerHTML;
                downloadBtnFeatured.innerHTML = '<i class="fas fa-check"></i><span>Downloaded</span>';
                downloadBtnFeatured.style.color = '#25d366';
                
                setTimeout(() => {
                    downloadBtnFeatured.innerHTML = originalContent;
                    downloadBtnFeatured.style.color = '';
                }, 2000);
            })
            .catch(error => {
                console.error('Download error:', error);
                alert('Download failed. Please try again later.');
            });
    });
}

// Featured Player Controls
const playPauseBtnFeatured = document.getElementById('play-pause-btn-featured');
const prevBtnFeatured = document.getElementById('prev-btn-featured');
const nextBtnFeatured = document.getElementById('next-btn-featured');

let isFeaturedPlaying = true;
let featuredTrackIndex = 0;

const featuredTracks = [
    { title: 'Promphizy | Local Way', artist: 'Promphizy' },
    { title: 'Summer Vibes 2025', artist: 'DJ Kokolet' },
    { title: 'Midnight Dreams', artist: 'The Soundwaves' }
];

function updateFeaturedPlayerIcon() {
    if (playPauseBtnFeatured) {
        const icon = playPauseBtnFeatured.querySelector('i');
        if (isFeaturedPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }
}

function toggleFeaturedPlayPause() {
    isFeaturedPlaying = !isFeaturedPlaying;
    updateFeaturedPlayerIcon();
}

function playFeaturedNext() {
    featuredTrackIndex = (featuredTrackIndex + 1) % featuredTracks.length;
    isFeaturedPlaying = true;
    updateFeaturedPlayerIcon();
}

function playFeaturedPrevious() {
    featuredTrackIndex = (featuredTrackIndex - 1 + featuredTracks.length) % featuredTracks.length;
    isFeaturedPlaying = true;
    updateFeaturedPlayerIcon();
}

if (playPauseBtnFeatured) {
    playPauseBtnFeatured.addEventListener('click', toggleFeaturedPlayPause);
}

if (nextBtnFeatured) {
    nextBtnFeatured.addEventListener('click', playFeaturedNext);
}

if (prevBtnFeatured) {
    prevBtnFeatured.addEventListener('click', playFeaturedPrevious);
}

// Pagination Logic for MUSIC and MIXTAPE pages
function initializePagination() {
    const musicListSection = document.querySelector('.music-list-section');
    const paginationContainer = document.querySelector('.pagination-container');
    
    if (!musicListSection || !paginationContainer) {
        return;
    }
    
    const musicItems = Array.from(musicListSection.querySelectorAll('.music-list-item'));
    const itemsPerPage = 15;
    const totalPages = Math.ceil(musicItems.length / itemsPerPage);
    let currentPage = 1;
    
    function showPage(pageNumber) {
        currentPage = pageNumber;
        
        musicItems.forEach((item, index) => {
            const itemPage = Math.floor(index / itemsPerPage) + 1;
            item.style.display = itemPage === currentPage ? 'flex' : 'none';
        });
        
        updatePaginationUI();
    }
    
    function updatePaginationUI() {
        paginationContainer.innerHTML = '';
        
        const maxVisiblePages = 4;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = i === currentPage ? 'page-number active' : 'page-number';
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }
        
        if (endPage < totalPages) {
            const dots = document.createElement('button');
            dots.className = 'page-dots';
            dots.textContent = '...';
            dots.disabled = true;
            paginationContainer.appendChild(dots);
            
            const lastPageBtn = document.createElement('button');
            lastPageBtn.className = 'page-number';
            lastPageBtn.textContent = totalPages;
            lastPageBtn.addEventListener('click', () => showPage(totalPages));
            paginationContainer.appendChild(lastPageBtn);
        }
        
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-next';
            nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
            nextBtn.addEventListener('click', () => showPage(currentPage + 1));
            paginationContainer.appendChild(nextBtn);
        }
    }
    
    showPage(1);
}

if (document.querySelector('.pagination-container')) {
    initializePagination();
}

// Content Click Navigation
function createSlug(text) {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

function navigateToContent(category, title, filename = null) {
    const slug = createSlug(title);
    const url = `/${category}/${slug}/`;
    
    // Determine if content is audio based on category or filename
    const isAudio = category === 'music' || category === 'mixtape' || 
                    (filename && (filename.toLowerCase().endsWith('.mp3') || filename.toLowerCase().endsWith('.wav')));
    
    // Store content data in sessionStorage for the informative page
    sessionStorage.setItem('contentData', JSON.stringify({
        category: category,
        title: title,
        url: url,
        date: new Date().toLocaleDateString(),
        filename: filename || (isAudio ? `${title}.mp3` : null),
        type: isAudio ? 'audio' : 'content'
    }));
    
    // Navigate to informative page
    window.location.href = 'informative-page.html';
}

// Music List Items Click Handler
document.querySelectorAll('.music-list-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const badge = item.querySelector('.music-badge span').textContent.toLowerCase();
        navigateToContent(badge, title);
    });
});

// Track Items Click Handler (Home page trending)
document.querySelectorAll('.track-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (!e.target.closest('.track-play-btn')) {
            const title = item.querySelector('h4').textContent;
            navigateToContent('home', title);
        }
    });
});

// Album Cards Click Handler
document.querySelectorAll('.album-card').forEach(card => {
    const originalClickHandler = card.onclick;
    card.addEventListener('click', (e) => {
        const title = card.querySelector('h4').textContent;
        navigateToContent('artist', title);
    });
});

// Load content data on informative page
if (window.location.pathname.includes('informative-page.html')) {
    const contentData = JSON.parse(sessionStorage.getItem('contentData') || '{}');
    
    if (contentData.title) {
        document.getElementById('content-title').textContent = contentData.title;
        document.getElementById('content-category').textContent = contentData.category.toUpperCase();
        document.getElementById('content-date').textContent = contentData.date;
        
        // Update browser URL without reload
        if (contentData.url && history.pushState) {
            history.pushState({}, '', contentData.url);
        }
        
        // Check if content is an audio file and auto-show play/share/download actions
        if (contentData.type === 'audio' && contentData.filename) {
            handleAudioFileUpload({ filename: contentData.filename });
        }
    }
    
    // Play Button - Send track to top navigation player
    const playContentBtn = document.getElementById('play-content-btn');
    if (playContentBtn) {
        playContentBtn.addEventListener('click', () => {
            const trackInfo = {
                id: Date.now(),
                title: contentData.title || 'Unknown Track',
                artist: contentData.artist || 'DJ Kokolet'
            };
            
            // Update mini player with track info
            const playerDetails = document.querySelector('.player-details');
            if (playerDetails) {
                playerDetails.querySelector('h4').textContent = trackInfo.title;
                playerDetails.querySelector('p').textContent = trackInfo.artist;
            }
            
            // Set playing state
            isPlaying = true;
            currentTrack = trackInfo;
            updatePlayPauseIcon();
        });
    }
    
    // Share Button - Toggle share popup
    const shareContentBtn = document.getElementById('share-content-btn');
    const sharePopup = document.getElementById('share-popup');
    const shareBtnWrapper = document.querySelector('.share-btn-wrapper');
    
    if (shareContentBtn && sharePopup) {
        shareContentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sharePopup.classList.toggle('active');
        });
        
        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (shareBtnWrapper && !shareBtnWrapper.contains(e.target)) {
                sharePopup.classList.remove('active');
            }
        });
        
        // Social media share handlers
        const shareBtns = sharePopup.querySelectorAll('.share-social-btn');
        shareBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const platform = btn.dataset.platform;
                const url = window.location.href;
                const text = `Check out: ${contentData.title || 'this track'} on Kokohypes!`;
                
                let shareUrl = '';
                switch(platform) {
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                        break;
                    case 'instagram':
                        alert('Please share via Instagram app');
                        return;
                    case 'tiktok':
                        alert('Please share via TikTok app');
                        return;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                        break;
                    case 'whatsapp':
                        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
                        break;
                }
                
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
                sharePopup.classList.remove('active');
            });
        });
    }
    
    // Download Button - Show confirmation banner
    const downloadContentBtn = document.getElementById('download-content-btn');
    const downloadBanner = document.getElementById('download-banner');
    const downloadOverlay = document.getElementById('download-overlay');
    const downloadCancel = document.getElementById('download-cancel');
    const downloadProceed = document.getElementById('download-proceed');
    
    if (downloadContentBtn && downloadBanner && downloadOverlay) {
        downloadContentBtn.addEventListener('click', () => {
            // Update download details
            document.getElementById('download-file-name').textContent = (contentData.title || 'Track') + '.mp3';
            document.getElementById('download-file-artist').textContent = contentData.artist || 'DJ Kokolet';
            document.getElementById('download-file-size').textContent = '5.2 MB';
            
            // Show banner
            downloadBanner.classList.add('active');
            downloadOverlay.classList.add('active');
        });
        
        // Cancel download
        if (downloadCancel) {
            downloadCancel.addEventListener('click', () => {
                downloadBanner.classList.remove('active');
                downloadOverlay.classList.remove('active');
            });
        }
        
        // Close on overlay click
        downloadOverlay.addEventListener('click', () => {
            downloadBanner.classList.remove('active');
            downloadOverlay.classList.remove('active');
        });
        
        // Proceed with download
        if (downloadProceed) {
            downloadProceed.addEventListener('click', () => {
                alert('Download started! (Demo: In production, this would download the .mp3 file)');
                downloadBanner.classList.remove('active');
                downloadOverlay.classList.remove('active');
            });
        }
    }
    
    // Tag extraction and generation
    function extractAndGenerateTags() {
        const contentBody = document.querySelector('.content-body');
        const tagsContainer = document.getElementById('tags-container');
        
        if (!contentBody || !tagsContainer) return;
        
        const textContent = contentBody.textContent || '';
        const words = textContent.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 3);
        
        const uniqueWords = [...new Set(words)];
        const commonWords = ['this', 'that', 'with', 'from', 'have', 'been', 'will', 'your', 'more', 'when', 'such', 'which', 'their', 'some', 'other', 'into', 'than', 'them', 'only', 'over', 'also', 'just', 'should', 'could', 'would'];
        
        const filteredWords = uniqueWords
            .filter(word => !commonWords.includes(word))
            .slice(0, 10);
        
        tagsContainer.innerHTML = '';
        
        filteredWords.forEach(word => {
            const tagLink = document.createElement('a');
            tagLink.href = getDomainPrefix() + `/tag/${word}/`;
            tagLink.className = 'tag-link';
            tagLink.textContent = `#${word}`;
            tagsContainer.appendChild(tagLink);
        });
    }
    
    // Domain prefix for live deployment
    function getDomainPrefix() {
        if (window.location.hostname === 'localhost' || window.location.hostname.includes('replit')) {
            return '';
        }
        return 'https://www.domainname.com';
    }
    
    // File type detection for .mp3/.wav
    function detectFileTypeAndShowActions(filename) {
        if (!filename) return false;
        
        const extension = filename.toLowerCase().split('.').pop();
        const audioExtensions = ['mp3', 'wav'];
        
        return audioExtensions.includes(extension);
    }
    
    // Auto-show play/share/download for audio files
    function handleAudioFileUpload(fileData) {
        const contentActions = document.querySelector('.content-actions');
        const contentFeaturedImage = document.querySelector('.content-featured-image');
        
        if (detectFileTypeAndShowActions(fileData.filename)) {
            if (contentActions) {
                contentActions.style.display = 'flex';
            }
            
            if (contentFeaturedImage) {
                contentFeaturedImage.innerHTML = '<i class="fas fa-music"></i>';
            }
        }
    }
    
    // Call tag extraction on page load for informative page
    if (document.querySelector('.content-detail-section')) {
        extractAndGenerateTags();
    }
}

// Booking form submission handler
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventType: document.getElementById('event-type').value,
            eventDate: document.getElementById('event-date').value,
            eventTime: document.getElementById('event-time').value,
            location: document.getElementById('event-location').value,
            duration: document.getElementById('event-duration').value,
            guestCount: document.getElementById('guest-count').value,
            musicPreferences: document.getElementById('music-preferences').value || 'Not specified',
            additionalDetails: document.getElementById('additional-details').value || 'None'
        };
        
        // Create WhatsApp message
        const message = `*New Booking Request*\n\n` +
            `*Client Details:*\n` +
            `Name: ${formData.fullName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `*Event Details:*\n` +
            `Type: ${formData.eventType}\n` +
            `Date: ${formData.eventDate}\n` +
            `Time: ${formData.eventTime}\n` +
            `Location: ${formData.location}\n` +
            `Duration: ${formData.duration} hours\n` +
            `Expected Guests: ${formData.guestCount}\n\n` +
            `*Preferences:*\n` +
            `Music: ${formData.musicPreferences}\n\n` +
            `*Additional Details:*\n${formData.additionalDetails}`;
        
        // WhatsApp API link - send to DJ Kokolet's number
        const whatsappNumber = '2348129440095';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Show success message overlay with countdown
        const successOverlay = document.getElementById('success-overlay');
        const countdownElement = document.getElementById('countdown');
        
        if (successOverlay) {
            successOverlay.classList.add('active');
            
            // 10-second countdown
            let countdown = 10;
            countdownElement.textContent = countdown;
            
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    
                    // Open WhatsApp after countdown
                    window.open(whatsappUrl, '_blank');
                    
                    // Hide overlay and reset form
                    setTimeout(() => {
                        successOverlay.classList.remove('active');
                        bookingForm.reset();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 1000);
                }
            }, 1000);
        }
    });
}
