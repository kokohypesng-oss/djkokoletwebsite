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
