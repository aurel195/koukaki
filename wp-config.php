<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'Koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',d,m&hBv:XSD}DUYj)uoq,zJ^]w/5uE[*D${PQ~fF-kq)9t~)[=GK}kc53k$cn5$' );
define( 'SECURE_AUTH_KEY',  'b^pn3K( N=@CghVnXdz1+Q9vYO6#4!,D9^cd&,fZ{&Nf5~#7F$<pPISDm;t#*qpr' );
define( 'LOGGED_IN_KEY',    'P(DBmw91F^TDELJjSBB4UwFL2|nV-tqfE1>Kl%]K3[@-6oLN/tVaqebb$D8FEzj{' );
define( 'NONCE_KEY',        '][irKVUlDmKu]4Bg@N/X,}:X x5%{7@r<paydS49^,Wb1vNq0nM!d<Sd1GwoN<:i' );
define( 'AUTH_SALT',        '0/%w3F!7<zx/TakTM:o[)-rj.V%tM&^)*u$d}CiF<or{$.E,s[EDL;p3&i![|>Zf' );
define( 'SECURE_AUTH_SALT', '8%^p6C%u4RnNt_K.r6S26Ce7m$FW~<Y/TjsFCCPveo!dZI&7+~Y?iE&S8o~1n{43' );
define( 'LOGGED_IN_SALT',   '%<^lK[j%AXi>Z]O[f~j$-m]b[tF/)lAG/V]&HgYKGF_mNlXPlj$5{N_Z2BxVJ@K~' );
define( 'NONCE_SALT',       '4}1o5|)2<tZY-(m^DedUY<~uRj&UN7)S^3SRi@Umg]_^Cdxu(_u$=jo6pi|aBz%F' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD', 'direct');