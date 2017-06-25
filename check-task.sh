#!/bin/bash
for rem in `git remote`; do
	git fetch $rem
done;
git checkout $1
git rebase -i origin/master
make UNOCONV=echo PDFCROP=echo
