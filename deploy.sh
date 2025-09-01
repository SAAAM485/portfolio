#!/bin/bash

npm run build

git add build
git commit -m "deploy: build for github pages"
git subtree push --prefix build origin gh-pages
