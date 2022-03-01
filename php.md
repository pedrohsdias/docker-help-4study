# PHP

Subir servidor embutido

```sh
php -S 0.0.0.0:80
```
## PHP 7

Construir imagem 

```sh
docker build -f php:7-fpm.dockerfile -t myphp:7-fpm .
```
----------
Container 

```sh
docker run --name=myphp7-fpm -w /app -v $(pwd):/app -p 80:80 -d myphp:7-fpm
```
----------
Container temporario

```sh
docker run --rm -it -w /app -v $(pwd):/app -p 80:80 myphp:7-fpm  bash
```
----------
Excluir container e imagem

```sh
docker stop myphp7-fpm && docker rm myphp7-fpm && docker rmi myphp:7-fpm
```

# PHP 8

Construir imagem 

```sh
docker build -f php-fpm.dockerfile -t myphp:8.1-fpm .
```
----------
Container 

```sh
docker run --name=myphp8.1-fpm -w /app -v $(pwd):/app -p 80:80 -d myphp:8.1-fpm
```
----------
Container temporario

```sh
docker run --rm -it -w /app -v $(pwd):/app -p 80:80 myphp:8.1-fpm  bash
```
----------
Excluir container e imagem

```sh
docker stop myphp8.1-fpm && docker rm myphp8.1-fpm && docker rmi myphp:8.1-fpm
```
# PHP 8-apache

Construir imagem 

```sh
docker build -f php-apache.dockerfile -t myphp:8.1-apache .
```
----------
Container 

```sh
docker run --name=myphp8.1-apache -w /app -v $(pwd):/app -p 80:80 -d myphp:8.1-apache
```
----------
Container temporario

```sh
docker run --rm -it -w /app -v $(pwd):/app -p 80:80 myphp:8.1-apache  bash
```
----------
Excluir container e imagem

```sh
docker stop myphp8.1-apache && docker rm myphp8.1-apache && docker rmi myphp:8.1-apache
```
