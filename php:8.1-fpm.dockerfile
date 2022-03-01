FROM composer:2.2 AS composer
#RUN composer about

FROM php:8.1-fpm

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
        vim \
        zip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev 

RUN pecl install xdebug

RUN docker-php-ext-configure gd --with-freetype --with-jpeg 

RUN docker-php-ext-install -j$(nproc) gd

RUN docker-php-ext-enable xdebug


RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

ADD conf/php/xdebug.ini  /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

EXPOSE 9003 9000

CMD ["tail","-f","/dev/null"]