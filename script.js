var values = ["", "", "", "", "","", "", "", ""];
var title = document.querySelector(".titleDiv h1");
var but = document.querySelectorAll("button");
title.style.color = "#000";
var turn = false;

displayVals();
updateTurn();
// enable(true);

function enable(val){
    for(var i= 0; i < values.length; i++){
        but[i].disabled = !val;
    }
}

function displayVals(){
    for(var i= 0; i < values.length; i++){
        var button = document.querySelector('button.button' + i);
        button.innerHTML = values[i];
    }
}

function updateTurn(){
    turn = !turn;
    title.style.color = "#000";
    if(turn) {
        title.innerHTML = "Your Turn";
    }
    else {
        title.innerHTML = "Computers' Turn";
        setTimeout(()=> {
            playComputer();
        }, 500);
    }
}

function reply_click(clickedID){
    if(values[clickedID] !== ""){
        title.innerHTML = "Please select a different position";
        title.style.color = "red";
    }
    else{
    updateList(clickedID);
    updateTurn();
    }
}

function updateList(id){
    var winner = false;
    setTimeout(()=>{
        winner = checkWinner();
    }, 100)
    if (!winner){
        if(turn) values[id] = 'X';
        else values[id] = 'O';
        displayVals();
    }
}

function playComputer(){
    if(isNotFull()){
        var randomPlace = (Math.floor(Math.random() * 9));
    while(values[randomPlace] !== ""){
        randomPlace = (Math.floor(Math.random() * 9));
    }
    updateList(randomPlace);
    updateTurn();
    }
    else{
        if(!checkWinner()){
            title.innerHTML = "Draw!";
            if(!alert("Draw! restart game?")) window.location.reload();
            //enable(false);
        }
}
}

function isNotFull(){   
    return values.includes("");
}

function checkWinner(){
    if(values[0] === "X" && values[1] === "X" && values[2] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[3] === "X" && values[4] === "X" && values[5] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[6] === "X" && values[7] === "X" && values[8] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[0] === "X" && values[3] === "X" && values[6] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[1] === "X" && values[4] === "X" && values[7] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[2] === "X" && values[5] === "X" && values[8] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[0] === "X" && values[4] === "X" && values[8] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[2] === "X" && values[4] === "X" && values[6] === "X"){
        if(!alert("You Win! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    
    
    else if(values[0] === "O" && values[1] === "O" && values[2] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[3] === "O" && values[4] === "O" && values[5] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[6] === "O" && values[7] === "O" && values[8] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[0] === "O" && values[3] === "O" && values[6] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[1] === "O" && values[4] === "O" && values[7] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[2] === "O" && values[5] === "O" && values[8] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[0] === "O" && values[4] === "O" && values[8] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else if(values[2] === "O" && values[4] === "O" && values[6] === "O"){
        if(!alert("You Lose! restart game?")) {
            window.location.reload();
            return true;
        }
    }
    else{
        return false;
    }
}