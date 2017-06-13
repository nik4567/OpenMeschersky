var ls = require('ls');
var tasks   = peelNames(ls('tasks/*.task.tex'  ),'\\.task\\.tex'  );
var answers = peelNames(ls('tasks/*.answer.tex'),'\\.answer\\.tex');
var tips    = peelNames(ls('tasks/*.tip.tex'   ),'\\.tip\\.tex'   );

var picsNames = ls('tasks/*.picture-???-crop.pdf'   );
var pics =    peelNames(picsNames,'\\.picture-\\d\\d\\d\\-crop.pdf'   );

console.log(pics);

function peelNames(arr, postfix) {
	var regexp = new RegExp(postfix+'$');
	return arr.map(function(file){
		return file.file.replace(regexp,'');
	});
}

console.log(tasks);

function peelTaskName(name){
	return name;
	// TODO: убирать ведущие нули у ПЕРВЫХ ДВУХ чисел. Ибо некошерно!
	// Только у первых двух, потому что дальше может идти - ВНЕЗАПНО! - десятичная дробь.
}


var listText = '';
for(var i = 0; i < tasks.length; i++){
	var name = tasks[i];
	listText += '\\inputtask{tasks/' + name + '.task.tex}{' + peelTaskName(name) + '}\n';
	if (tips.indexOf(name) !== -1) {
		listText += '\\inputtip   {tasks/' + name +    '.tip.tex}\n';
	}
	if (answers.indexOf(name) !== -1) {
		listText += '\\inputanswer{tasks/' + name + '.answer.tex}\n';
	}
	
	// Картинки - немного криво, но всё же
	if (pics.indexOf(name) !== -1) {
		// Теоретически это должно уметь вставлять по несколько картинок.
		// На практике - не проверял.
		// TODO: проверить
		for (var j = 0; j < picsNames.length; j++) {
			var r = new RegExp(name + '\\.picture-\\d\\d\\d-crop.pdf');
			console.log(picsNames[j].file);
			if (r.test(picsNames[j].file)) {
				listText += '\\inputpic{tasks/' + picsNames[j].file.replace(/\.pdf$/,'') + '}{' + name + '}\n';
			}
		}
	}

}

var fs = require('fs');

fs.writeFileSync('tasklist.tex',listText);
