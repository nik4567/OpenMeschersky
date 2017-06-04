all:
	js make-task-list.js
	pdflatex OpenMeschersky.tex
	pdflatex OpenMeschersky.tex
	nohup evince OpenMeschersky.pdf &

