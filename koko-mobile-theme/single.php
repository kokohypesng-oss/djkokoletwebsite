<?php
/**
 * Template: Single Post
 * 
 * This template displays a single blog post or music track.
 * It shows the full content, title, date, and featured image.
 * 
 * @package Koko_Mobile_Theme
 */

get_header(); 
?>

<main class="main-content single-post">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Post Header -->
            <header class="entry-header">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                <div class="entry-meta">
                    <?php
                    echo '<span class="posted-on">' . get_the_date() . '</span>';
                    echo '<span class="byline"> by ' . get_the_author() . '</span>';
                    ?>
                </div>
            </header>

            <!-- Featured Image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="post-thumbnail">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <!-- Post Content -->
            <div class="entry-content">
                <?php the_content(); ?>
            </div>

            <!-- Post Footer -->
            <footer class="entry-footer">
                <?php
                $categories = get_the_category();
                if (!empty($categories)) {
                    echo '<span class="cat-links">Categories: ';
                    echo esc_html($categories[0]->name);
                    echo '</span>';
                }
                ?>
            </footer>
        </article>

        <!-- Comments -->
        <?php
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
