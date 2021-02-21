let button = document.querySelector('.buttonn');

button.addEventListener('click', function (){

var e = document.getElementById("education");
var f = document.getElementById("family");
var strUser = e.value;

var total = 500;

if(e.value == 1){
	total *= 1.5;
}
else if(e.value == 2){
	total *= 1.2;
} else if(e.value == 3){
	total *= 1.05;
} else{
	total *= 0.9;
} 
if(f.value == 1){
	total *= 2;
}
else if(f.value == 2){
	total *= 1.5;
} else{
	total *= 1.2;
} 
if(document.getElementById('opt1').checked) { 
    total*=1.5;
} 
else if(document.getElementById('opt2').checked) { 
	total*=1.2;
} 
else { 
    total *= 0.95;
} 
if(document.getElementById('optionn1').checked == true) { 
    total += 100;
} 
if(document.getElementById('optionn2').checked == true) { 
	total += 200;
}  
if(document.getElementById('optionn3').checked == true) { 
	total += 150;
}
if(document.getElementById('optionn4').checked == true){ 
    total += 100;
}

if(document.getElementById('option1').checked == true) { 
    total*=0.85;
} 
if(document.getElementById('option2').checked == true) { 
	total*=0.9;
} 
if(document.getElementById('option3').checked == true) { 
    total -= 200;
} 
var output = res.textContent;
res.textContent = total + '$';
});

