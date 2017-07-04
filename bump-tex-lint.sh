#!/bin/sh
git fetch origin
git checkout origin/master
npm install --save tex-lint@latest
git add package.json
git commit -m "tex-lint bump"
git push origin HEAD:master

