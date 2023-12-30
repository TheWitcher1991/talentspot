FROM python:3.12.0

SHELL ["/bin/bash", "-c"]

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt /temp/requirements.txt
COPY talentspot /talentspot

WORKDIR /talentspot

EXPOSE 8080

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

RUN adduser --disabled-password ts

USER ts
