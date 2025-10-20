<?php
/**
 * Inc: Setup
 * 
 * This file registers menus, widgets, sidebars, and other theme features.
 * You can add custom functions here to extend your theme's functionality.
 * 
 * @package Koko_Mobile_Theme
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register Widget Areas
 */
function koko_mobile_theme_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'koko-mobile-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'koko-mobile-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer', 'koko-mobile-theme'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'koko-mobile-theme'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'koko_mobile_theme_widgets_init');

/**
 * Custom Image Sizes
 */
add_image_size('koko-thumbnail', 160, 160, true); // Music cover size
add_image_size('koko-featured', 400, 400, true);  // Featured image size

/**
 * Excerpt Length
 */
function koko_mobile_theme_excerpt_length($length) {
    return 20; // Number of words in excerpt
}
add_filter('excerpt_length', 'koko_mobile_theme_excerpt_length');

/**
 * Excerpt More Text
 */
function koko_mobile_theme_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'koko_mobile_theme_excerpt_more');
