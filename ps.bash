#!/bin/bash

set -e

echo "before : "
git status
git add .
echo "after : "
git status
echo "enter commit msg : "
read msg
echo "do you want to skip ci y/n"
read skip
if [ $(echo ${skipˆˆ}) -eq 'Y' ]
then 
    git commit -m "$msg [skip ci]"
else
    git commit -m "$msg"
fi
echo "pushing ..."
git push -u origin master
