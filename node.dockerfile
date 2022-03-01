FROM node:17


RUN apt-get update && apt-get install -y \
        vim \
        zip 


RUN npm i -g \
    npm \
    @nrwl/cli \
    @angular/cli \
    yarn


WORKDIR /app
VOLUME [ "/app" ]
CMD ["tail","-f","/dev/null"]