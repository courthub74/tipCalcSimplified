// Create Global variables for getting element by ID or query Selector

const getBill = document.getElementById('input'); //whats entered into the text field
const totalValue = document.getElementById('.total-value'); //location for print out
const numOfPeople = document.getElementById('numOfPeople'); //whats entered into the num of people text field

//for 5%
    //retrieve input by the button global variable
    //multiply it by .05
    //output the new value in the output display

function printOut5() {
    document.getElementById("total-value").innerHTML = `5% - $${getBill.value * .05 / numOfPeople.value}`;
}

function printOut10() {
    document.getElementById("total-value").innerHTML = `10% - $${getBill.value * .10 / numOfPeople.value}`;
}

function printOut15() {
    document.getElementById("total-value").innerHTML = `15% - $${getBill.value * .15 / numOfPeople.value}`;
}

function printOut20() {
    document.getElementById("total-value").innerHTML = `20% - $${getBill.value * .20 / numOfPeople.value}`;
}

//NOW lets SPLIT AMONGST PEOPLE

//if 10%,  divide .10 by the num of people entered

//NOW lets change the Input label through this page

//first create an object[list]

const changeIt = {
    input: "Bill Amount",
    tipAmt: "Tip Amount",
}

//NOW create a variable
const inputChg = document.querySelector(".bill-total").innerHTML = changeIt.input;
const totalChg = document.querySelector(".total").innerHTML = changeIt.tipAmt;
// const tipAmtChg = document.querySelector("")

//ABOVE makes it changeable
//NOW just make the edit to the string to change it