var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i=0; i<scores.length; i+=12){
	console.log("There are " + scores.length + " grades.");
}
for(var i=0; i<scores.length; i+=12){
	var min= Math.min(...scores);
	console.log("The lowest grade is ", + min);	
}
for(var i=0; i<scores.length; i+=12){
	var max= Math.max(...scores);
	console.log("The highest grade is ", + max);	
}







