var box=document.querySelector('.box');
var color=document.querySelector('.color');
var red=document.querySelector('#red');
var green=document.querySelector('#green');
var blue=document.querySelector('#blue');
color.innerText=`rgb( ${red.value} , ${green.value} , ${blue.value} )`;

red.addEventListener('input',changeColor);
green.addEventListener('input',changeColor); 
blue.addEventListener('input',changeColor);

function changeColor() {
    var redValue = red.value;
    var greenValue = green.value;
    var blueValue = blue.value;
    box.style.color=`rgb(${redValue}, ${greenValue}, ${blueValue})`;
    color.style.color=`rgb(${redValue}, ${greenValue}, ${blueValue})`;
    color.innerText=`rgb( ${redValue} , ${greenValue} , ${blueValue} )`;
    if(redValue >=180 && greenValue >=180 && blueValue >=180) {
        box.style.backgroundColor = 'black';
        color.style.backgroundColor = 'black';
    }else {
        box.style.backgroundColor = 'white';
        color.style.backgroundColor = 'white';
    }
    
}

