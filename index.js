function Zero(){
    let value = document.getElementById('zero');
    let Display =  document.getElementById('Display');

    Display.value += '0';
}
function Double0(){
    let value = document.getElementById('Double-zero');
    let Display = document.getElementById('Display');

    Display.value += '00'
}
function Point(){
    let value = document.getElementById('point');
    let Display = document.getElementById('Display');

    Display.value += ".";

}

function One(){
    let value = document.getElementById('one').value;
    let Display = document.getElementById('Display');

    Display.value += '1';
}
function Two(){
    let value = document.getElementById('two').value;
    let Display = document.getElementById('Display');

    Display.value += '2';
}
function Three(){
    let value = document.getElementById('three').value;
    let Display =document.getElementById('Display');

    Display.value += '3';
}

function Four(){
    let value = document.getElementById('four').value;
    let Display = document.getElementById('Display');

    Display.value += '4';
}
function Five(){
    let value = document.getElementById('five').value;
    let Display = document.getElementById('Display');

    Display.value += '5';
}
function Six(){
    let value = document.getElementById('six').value;
    let Display = document.getElementById('Display');

    Display.value += '6'
}


function seven(){
    //  Get the value from the valueInput Field
    let value = document.getElementById("seven").value;

// Get the text input element
    let Display = document.getElementById("Display");

    //Append the value to the text input
    Display.value += '7';

}
function Eight(){
    let value = document.getElementById('eight').value;
    let Display =  document.getElementById('Display');

    Display.value += '8';
}
function Nine(){
    let value = document.getElementById('nine').value;
    let Display =  document.getElementById('Display');

    Display.value += '9';
}
















//Operators Code
function Cancel(){
    let value = document.getElementById('cancel');
    let Display = document.getElementById('Display');

    Display.value = '';
}
function Delete(){
    let value = document.getElementById('delete').value;
    let Display = document.getElementById('Display');

    Display.value = Display.value.toString().slice(0, -1);
}
function percentage(){
    let value = document.getElementById('percent');
    let Display = document.getElementById('Display');

    Display.value = eval(Display.value / 100)
}
function Multipy(){
    let value = document.getElementById('Multi').value;
    let Display = document.getElementById('Display');

    Display.value += '*';
}


function Divide(){
    let value = document.getElementById('divide').value;
    let Display = document.getElementById('Display');

    Display.value += '/'
}

function Minus(){
    let value = document.getElementById('minus').value;
    let Display = document.getElementById('Display');

    Display.value += '-'

}
function Addition(){
    let Value = document.getElementById("plus").value;

    let Display = document.getElementById('Display');

    Display.value += '+'
}
function EqualTo(){
    let Value = document.getElementById("Equal").value;

    let Display = document.getElementById('Display');

    Display.value = eval(Display.value)

    

}
