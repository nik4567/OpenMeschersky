JS=nodejs
TEX=pdflatex
PDFVIEWER=evince
UNOCONV=unoconv
PDFCROP=pdfcrop

all: allpics
	$(JS) make-task-list.js
	$(TEX) OpenMeschersky.tex
	$(TEX) OpenMeschersky.tex
	$(JS) node_modules/tex-lint/cli/lint-files.cli.js openMeschersky tasks/*.*.tex
	nohup $(PDFVIEWER) OpenMeschersky.pdf &

allpics: $(patsubst %.odg,%.pdf,$(wildcard tasks/*.odg))

%.pdf: %.odg
	$(UNOCONV) -f pdf $<
	$(PDFCROP) $@
