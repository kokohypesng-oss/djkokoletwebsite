<?php
/**
 * Koko Mobile Theme Functions
 * 
 * This file controls theme setup, features, and configurations.
 * It loads additional PHP files from the /inc/ folder and registers
 * menus, sidebars, scripts, and styles.
 * 
 * @package Koko_Mobile_Theme
 * @version 1.0.0
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function koko_mobile_theme_setup() {
    // Add theme support for various WordPress features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'koko-mobile-theme'),
        'footer' => __('Footer Menu', 'koko-mobile-theme'),
    ));
}
add_action('after_setup_theme', 'koko_mobile_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function koko_mobile_theme_scripts() {
    // Main stylesheet
    wp_enqueue_style('koko-mobile-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Additional CSS
    wp_enqueue_style('koko-mobile-main', get_template_directory_uri() . '/css/main.css', array(), '1.0.0');
    
    // Main JavaScript
    wp_enqueue_script('koko-mobile-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
}
add_action('wp_enqueue_scripts', 'koko_mobile_theme_scripts');

/**
 * Load additional theme files from /inc/ folder
 */
require_once get_template_directory() . '/inc/setup.php';

/**
 * Custom template tags and functions
 */
function koko_mobile_theme_posted_on() {
    $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
    $time_string = sprintf($time_string,
        esc_attr(get_the_date('c')),
        esc_html(get_the_date())
    );
    
    echo '<span class="posted-on">' . $time_string . '</span>';
}
