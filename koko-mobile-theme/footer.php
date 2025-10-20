    <?php
/**
 * Template: Footer
 * 
 * This file controls the bottom footer area and navigation menu.
 * It includes the sticky bottom navigation bar with menu items.
 * 
 * @package Koko_Mobile_Theme
 */
?>

    <!-- Bottom Navigation Menu -->
    <nav class="bottom-nav">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-item">
            <i class="fas fa-home"></i>
            <span>HOME</span>
        </a>
        <a href="<?php echo esc_url(home_url('/music')); ?>" class="nav-item">
            <i class="fas fa-music"></i>
            <span>MUSIC</span>
        </a>
        <a href="<?php echo esc_url(home_url('/mixtape')); ?>" class="nav-item">
            <i class="fas fa-layer-group"></i>
            <span>MIXTAPE</span>
        </a>
        <a href="<?php echo esc_url(home_url('/booking')); ?>" class="nav-item">
            <i class="fas fa-calendar-check"></i>
            <span>BOOKING</span>
        </a>
        <a href="<?php echo esc_url(home_url('/kaward')); ?>" class="nav-item">
            <i class="fas fa-award"></i>
            <span>K/AWARD</span>
        </a>
        <a href="#" class="nav-item" id="more-btn">
            <i class="fas fa-ellipsis-h"></i>
            <span>MORE</span>
        </a>
    </nav>

    <!-- Music Player (Fixed at bottom) -->
    <div class="music-player-bar">
        <div class="player-content">
            <img src="<?php echo get_template_directory_uri(); ?>/images/kokohypes-cover.png" alt="Now Playing" class="player-thumbnail">
            <div class="player-info">
                <h4>Select a track</h4>
                <p>Start playing music</p>
            </div>
        </div>
        <div class="player-controls">
            <button class="player-btn" id="prev-btn">
                <i class="fas fa-step-backward"></i>
            </button>
            <button class="player-btn play-pause-btn" id="play-pause-btn">
                <i class="fas fa-play"></i>
            </button>
            <button class="player-btn" id="next-btn">
                <i class="fas fa-step-forward"></i>
            </button>
        </div>
    </div>

</div><!-- .app-container -->

<?php wp_footer(); ?>
</body>
</html>
