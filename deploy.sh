#!/bin/bash

if [ -z "$1" ]; then
  echo "Anna commit-viesti näin: ./deploy.sh \"viesti\""
  exit 1
fi

git add .
git commit -m "$1"
git push