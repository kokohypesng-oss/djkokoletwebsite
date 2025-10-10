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
const trackPlayBtns = document.querySelectorAll('.track-play-btn');
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

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrevious);

featuredPlayBtn.addEventListener('click', () => {
    currentTrack = { id: 0, title: 'Summer Vibes 2025', artist: 'DJ Kokolet' };
    isPlaying = true;
    updatePlayerUI(currentTrack);
    updatePlayPauseIcon();
});

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
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.borderColor = 'var(--primary-color)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.borderColor = 'transparent';
});

document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        const artist = card.querySelector('p').textContent;
        currentTrack = { id: 0, title, artist };
        isPlaying = true;
        updatePlayerUI(currentTrack);
        updatePlayPauseIcon();
    });
});
