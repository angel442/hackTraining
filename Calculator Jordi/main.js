keyBoard = document.querySelector(".keyboard");

let Answer = "";

const correct_values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/"]


//Handle events
keyBoard.addEventListener("keyup", e =>{
    if (e.key == "Enter") {
        calculateAwnser();
    }
})

//Only numbers and operators
function blockSpecialChar(e) {
    return (correct_values.includes(e.key)); 
}

//calculate result from input    
function calculateAwnser() {
    try {
        Answer = eval(document.getElementById("kb").value);
        document.getElementById("kb").value = Answer;
    }
    catch(error) {
        alert("The expression is not computable!");
    }
}

function writeChar(character) {
    document.getElementById("kb").value += character;
}

function writeAns() {
    if (Answer == "") alert("No Awnser has been previously calculated!");
    document.getElementById("kb").value += Answer;
}

function deleteChar() {
    aux = document.getElementById("kb").value.slice(0, -1);
    document.getElementById("kb").value = aux;
}

function clearInput() {
    document.getElementById("kb").value = "0";
}