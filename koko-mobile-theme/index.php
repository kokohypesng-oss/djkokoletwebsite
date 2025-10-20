<?php
/**
 * Template: Index (Main Homepage)
 * 
 * This is the main homepage template that displays your blog posts
 * or custom content. WordPress uses this as the default template
 * when no other specific template is found.
 * 
 * @package Koko_Mobile_Theme
 */

get_header(); 
?>

<main class="main-content">
    <!-- Hero/Banner Section -->
    <section class="hero-section">
        <h2 class="section-title">Welcome to Kokohypes</h2>
        <p class="section-description">Your mobile music streaming experience</p>
    </section>

    <!-- Posts Loop -->
    <?php if (have_posts()) : ?>
        <section class="posts-section">
            <div class="posts-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('parts/content'); ?>
                <?php endwhile; ?>
            </div>
            
            <!-- Pagination -->
            <div class="pagination">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '<i class="fas fa-arrow-left"></i>',
                    'next_text' => '<i class="fas fa-arrow-right"></i>',
                ));
                ?>
            </div>
        </section>
    <?php else : ?>
        <section class="no-posts">
            <p>No content found. Start adding posts in WordPress Admin.</p>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
