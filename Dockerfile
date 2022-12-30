FROM pho3be/sh4devenvgitpod:latest

USER root

RUN apt-get update && apt-get install -y nano vim

USER dev
