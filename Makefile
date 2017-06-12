JS=nodejs
TEX=pdflatex
PDFVIEWER=evince
all:
	$(JS) make-task-list.js
	$(TEX) OpenMeschersky.tex
	$(TEX) OpenMeschersky.tex
	$(JS) node_modules/tex-lint/cli/lint-files.cli.js openMeschersky tasks/*.*.tex
	nohup $(PDFVIEWER) OpenMeschersky.pdf &
