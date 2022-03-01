FROM composer:2.2 AS composer

FROM php:8.1-apache

RUN apt-get update && apt-get install -y \
        vim \
        zip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev 

COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY apache2.conf /etc/apache2/apache2.conf


ENV APACHE_DOCUMENT_ROOT /path/to/new/root

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf \
    && mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini" \
    && a2enmod rewrite