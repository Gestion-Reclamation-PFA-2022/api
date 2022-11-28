#!/bin/bash

echo "before : "
git status
git add .
echo "after : "
git status
echo "enter commit msg : "
read msg
git commit -m "$msg"
echo "pushing ..."
git push -u origin master
