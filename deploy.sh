#!/usr/bin/env sh

# abort on errors
set -e

# make nvm available
. ~/.nvm/nvm.sh

# use node 16
nvm use 16

yarn build

git add dist -f
git commit -m 'add dist'

git subtree push --prefix dist origin gh-pages

#git push -f git@github.com:bulatgab/asana-clone3.git main:gh-pages
