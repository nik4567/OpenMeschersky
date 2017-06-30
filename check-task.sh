#!/bin/bash
for rem in `git remote`; do
	echo "Fetching remote $rem..."
	git fetch $rem
done;
echo 'Remotes fetched'
git checkout $1
git rebase -i origin/master
make UNOCONV=echo PDFCROP=echo
