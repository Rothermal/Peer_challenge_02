// Hey Everyone!

// Peer Challenge

// Create an array with everyone in the cohort as a different index within the array,
// Example,
// [ "scott", "kristy", "natalie", "charlie"]

// Have a 'create' button loaded on the DOM when the app loads.
// Each time the button is clicked, reveal 1 person from the array. 
// Each time you click the button, you should reveal the next person in the array.
// That person should be revealed via a slideDown animation.
// In addition to that person's name, also include a remove button.
// Clicking on the remove button should fire off an animation that makes the person's name fade out 
// (in addition to the button that was clicked).

// If you click the 'create' button enough times, you will exhaust the list of people in it 
// (basically, you get to the end of the array).
// When this happens, remove EVERYONE from the DOM, and start the experience over.

// HARD MODE
// Have people appear in a 'box' that has equal width and height. The person's name should appear in the 
// center of the box. Style however you would like to make the 'box' appear, well, 'box-like'.

// PRO MODE
// Use .animate to not have the person fade out completely, but down to 5%. 
// Clicking on the button again should restore the full opacity of that person.

// Good luck and have fun!




// so made an array of students.
var cohort = ['altamir','joe','liz','Prescott','scott','amber','kenzi','anthony','brooks','matthew','jeremy','natalie',
'charlie','chris','eric','robby','nathan','zach','sam','paul','kristy','aesop',"Stop"];
// put all my object liseners here.
$(document).ready(function(){
$('#container').append("<button class='theta'>Transendance Through Suffering</button>");
$('#container').on('click', '.theta',nextUp);
$('#container').on('click', '.bye-bye',goAway);

// console.log("is this thing on");
});
 //  felt like bucking the trend and not using a for loop today. brain was fried at this point, tried something simpler
 // used a shift and then a push to cycle through the names on the array.
function nextUp(){
	// for(var i = 0;i<cohort.length;i++){
	// console.log(cohort[i]);
	// var value=cohort[i];
	var value = cohort.shift()
	cohort.push(value);
	// used a conditional to reset the dom added a string to set it off, then cleared out all the kids with a remove, 
	// finally it calls a function which re inserts the inital button.
	if(value == "Stop" ){
		console.log('fuck loops');
	$('#container').children().remove();
	restart();
	}else {
	// adds the employees to the dom with a button to fade the name/button.
	$('#container').append('<div class="shape"></div>');
	var $el=$('#container').children().last();
	$el.append(value);
	$el.append('<button class="bye-bye">Fade</button>');
	// trying to put in some data just to check it out. could not get it to work.
	$el.data("kitty", "FUCK U DATA"); 
	}
	}
	// initally removed the cohort member, then changed to fading them with animate.
	function goAway(){
	$(this).parent().animate({opacity: .5},1000);	
	// trying to find the data that i put out there. unable to find it.
	console.log($('.bye-bye').data("kitty"));


	}
	// called after i remove everything. puts the inital button back.
function restart(){
	$('#container').append("<button class='theta'>Transendance Through Suffering</button>");
}

