ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

composer install --ignore-platform-reqs --no-scripts

Permições php-apache no laravel
chown -R www-data:www-data /app
find /app -type f -exec chmod 644 {} \;
find /app -type d -exec chmod 755 {} \;
chgrp -R www-data storage bootstrap/cache