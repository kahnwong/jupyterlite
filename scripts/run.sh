#!/bin/bash

pipenv install
pipenv run jupyter lite build --contents content
cd ./_output
caddy file-server
