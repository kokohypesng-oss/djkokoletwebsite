<?php
/**
 * Template: Page
 * 
 * This template displays static pages like About, Contact, etc.
 * It's similar to single.php but designed for pages instead of posts.
 * 
 * @package Koko_Mobile_Theme
 */

get_header(); 
?>

<main class="main-content page-content">
    <?php while (have_posts()) : the_post(); ?>
        <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Page Header -->
            <header class="page-header">
                <h1 class="page-title"><?php the_title(); ?></h1>
            </header>

            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="page-thumbnail">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <!-- Page Content -->
            <div class="page-content-area">
                <?php the_content(); ?>
            </div>
        </article>

        <!-- Comments (if enabled for pages) -->
        <?php
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
