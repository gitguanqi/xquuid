#!/bin/bash
# author: xgfed
# date: 2022.09.29
# des: this is a auto submit shell script.

set 0

git add .
read -p "Please input your commit:" commit
git commit -m "$commit"
git push origin master

exit 0

