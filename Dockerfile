FROM jenkins:latest
USER root
RUN apk update
RUN apk install -y python-pip
# Install app dependencies
RUN pip install --upgrade pip