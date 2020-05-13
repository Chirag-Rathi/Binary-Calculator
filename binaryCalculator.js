function zeroAdd(){
    var currentText = document.getElementById("res").value;
    currentText = currentText + 0;
    document.getElementById("res").value = currentText;
}

function oneAdd(){
    var currentText = document.getElementById("res").value;
    currentText = currentText + 1;
    document.getElementById("res").value = currentText;
}

function cl(){
    document.getElementById("res").value = "";
}

function addi(){
   var currentText = document.getElementById("res").value;
    currentText = currentText + "+";
    document.getElementById("res").value = currentText; 
}

function sub(){
   var currentText = document.getElementById("res").value;
    currentText = currentText + "-";
    document.getElementById("res").value = currentText; 
}

function mul(){
   var currentText = document.getElementById("res").value;
    currentText = currentText + "*";
    document.getElementById("res").value = currentText; 
}

function div(){
    var currentText = document.getElementById("res").value;
    currentText = currentText + "/";
    document.getElementById("res").value = currentText; 
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function calc(){
    var currentText = document.getElementById("res").value;
    var temp = currentText.split(/([+|-|*|/])/g);
    var firstNum = parseInt( temp[0], 2 );
    var operator = temp[1]
    var secondNum = parseInt( temp[2], 2 );
    var thirdNum = 0;
    switch(operator){
        case "+":
            thirdNum = firstNum+secondNum;
            break;
            
        case "-":
            thirdNum = firstNum-secondNum;
            break;
            
        case "*":
            thirdNum = firstNum*secondNum;
            break;
            
        case "/":
            thirdNum = firstNum/secondNum;
            break;
    }
    
    var ans = dec2bin(thirdNum);
    document.getElementById("res").value = ans; 
}
