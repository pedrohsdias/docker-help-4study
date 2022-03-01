
## Comandos para testar imagens base

## [PHP 7](/php.md#PHP-7)

## [PHP 8](/php.md#PHP-8)
## [PHP 8-apache](/php.md#PHP-8-apache)


```sh

```
## Comandos de build
Nginx

```sh
docker build -f php-fpm.dockerfile -t myphp:8.1-fpm .
```
Node

```sh
doc[ker build -f php-fpm.dockerfile -t myphp:8.1-fpm .
```
docker stop nodelocal && docker rm nodelocal && docker rmi node12:base
docker build -f ./node.dockerfile -t node12:base .
docker run --rm -v $(pwd):/app -p 4200:4200 --name nodelocal -d node12:base
docker exec -it nodelocal bash
nx serve studio --host 0.0.0.0