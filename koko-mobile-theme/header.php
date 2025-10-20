<?php
/**
 * Template: Header
 * 
 * This file controls the top header area of your website.
 * It includes the logo, navigation menu, search bar, and theme switcher.
 * 
 * @package Koko_Mobile_Theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="app-container">
    <!-- Main Header Section -->
    <header class="main-header">
        <div class="header-content">
            <!-- Logo -->
            <h1 class="logo">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo('name'); ?>
                </a>
            </h1>
            
            <!-- Theme Switcher -->
            <div class="theme-switcher">
                <i class="fas fa-sun"></i>
                <span class="theme-status">ON</span>
            </div>
        </div>
        
        <!-- Search Bar -->
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="search-input" placeholder="Search songs, artists, albums...">
        </div>
    </header>
