JS=nodejs
all:
	$(JS) make-task-list.js
	pdflatex OpenMeschersky.tex
	pdflatex OpenMeschersky.tex
	js node_modules/tex-lint/cli/lint-files.cli.js openMeschersky tasks/*.tex
	nohup evince OpenMeschersky.pdf &
