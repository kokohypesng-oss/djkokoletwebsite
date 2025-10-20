<?php
/**
 * Pattern: Hero Section
 * 
 * This is a block pattern template for creating a hero/banner section.
 * You can use this pattern in the WordPress block editor to quickly
 * add a styled hero section to your pages.
 * 
 * @package Koko_Mobile_Theme
 */
?>
<!-- wp:group {"align":"full","className":"hero-section"} -->
<div class="wp-block-group alignfull hero-section">
    <!-- wp:heading {"level":1,"className":"hero-title"} -->
    <h1 class="hero-title">Welcome to Kokohypes</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"className":"hero-description"} -->
    <p class="hero-description">Your ultimate mobile music streaming experience with DJ Kokolet</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons -->
    <div class="wp-block-buttons">
        <!-- wp:button {"className":"hero-cta-button"} -->
        <div class="wp-block-button hero-cta-button">
            <a class="wp-block-button__link">Explore Music</a>
        </div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
