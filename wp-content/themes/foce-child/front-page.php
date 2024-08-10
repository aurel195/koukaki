<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner banner-container">
            <?php get_template_part( '/template-part/video-banner'); ?>
        </section>
        <section id="story" class="story fadeUp">
            <h2>
                <span class="titleAnim1 titleMov1">L'</span>
                <span class="titleAnim2 titleMov2">histoire</span>
            </h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <article id="characters">
                <div class="main-character">
                    <h3 id="#place" class="titreh3">
                        <span class="titleAnim1 titleMov1">Les</span>
                        <span class="titleAnim2 titleMov2">&nbsp;personnages</span>
                    </h3>
                    <?php get_template_part('template-part/personnages'); ?>
                </div>
            </article>
                   
            <article id="place">
                <div class="place">
                    <h3><span class="titleAnim1 titleMov1">Le</span><span class="titleAnim2 titleMov2">&nbsp;Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <?php get_template_part('template-part/clouds'); ?>
            </article>
        </section>


        <section id="studio" class="fadeUp">
            <h2>
                <span class="titleAnim1 titleMov1">Studio</span>
                <span class="titleAnim2 titleMov2">&nbsp;Koukaki</span>
            </h2>
                <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            <div>
            </section>
            <?php get_template_part( '/template-part/nomination-section' ); ?>
         
    </main><!-- #main -->
    
<?php
get_footer();
