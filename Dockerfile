FROM ubuntu:20.04

#Un paquete se queja si no
ENV TZ=Europe/Madrid
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV NODE_MAJOR=16
RUN apt-get update
RUN apt-get install -y curl wget ca-certificates gnupg
RUN apt-get install -y unzip
RUN mkdir -p /etc/apt/keyrings/
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN apt-get update
RUN apt-get install nodejs -y
RUN mkdir /chrome
RUN mkdir /tester
WORKDIR /chrome
RUN wget -q http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_114.0.5735.90-1_amd64.deb && apt-get install -y ./google-chrome-stable_114.0.5735.90-1_amd64.deb
RUN wget -q https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip
RUN unzip chromedriver_linux64.zip

RUN apt-get install -y git
RUN apt-get install npm -y


RUN mkdir /data
WORKDIR /data
RUN ls
RUN git clone https://github.com/Arri98/TestLoad
WORKDIR TestLoad
RUN npm install -y
RUN git checkout smarterp
RUN mkdir drivers
RUN mv /chrome/chromedriver drivers/

ENTRYPOINT ./start2.sh
