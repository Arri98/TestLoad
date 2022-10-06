FROM ubuntu:20.04

#Un paquete se queja si no
ENV TZ=Europe/Madrid
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update
RUN apt-get install -y curl wget
RUN curl -fsSL https://deb.nodesource.com/setup_16.x  &&  apt-get install -y nodejs npm
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && apt-get install -y ./google-chrome-stable_current_amd64.deb

COPY . /Load/
WORKDIR /Load

RUN npm install

ENTRYPOINT npm start
