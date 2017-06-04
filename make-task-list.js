var ls = require('ls');
var tasks   = peelNames(ls('tasks/*.task.tex'  ),'\\.task\\.tex'  );
var answers = peelNames(ls('tasks/*.answer.tex'),'\\.answer\\.tex');
var tips    = peelNames(ls('tasks/*.tip.tex'   ),'\\.tip\\.tex'   );

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
}

var fs = require('fs');

fs.writeFileSync('tasklist.tex',listText);
