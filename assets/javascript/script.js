var targetNumber;
var userGuess = 0;
var winTally = 0;
var lossTally = 0;
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var number;
var pictureValues = $("img").click(grabId);
var inputBlocker = false;


function assignNumberAndStart() {
    userGuess = 0;
    $(".player").html(userGuess);
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $(".target").html(targetNumber);
    $(".display").html(" ");
    $(".image1").attr("id", Math.floor(Math.random() * numbersArray.length + 1))
    $(".image2").attr("id", Math.floor(Math.random() * numbersArray.length + 1))
    $(".image3").attr("id", Math.floor(Math.random() * numbersArray.length + 1))
    $(".image4").attr("id", Math.floor(Math.random() * numbersArray.length + 1))
}
function grabId(){
    
    var theId = this.id;
    gameLogic(theId);
    
    
}

function lossNotification() {
    $(".display").html("You Lost! Play Again!")
}

function winNotification() {
    $(".display").html("You Won! Play Again!")
}

function gameLogic(value){
    
    userGuess =+ parseInt(value) + parseInt(userGuess);
    
    $(".player").html(userGuess);


    if(userGuess > targetNumber){
        
        lossTally++
        $(".losstext").html(lossTally);
        
        
        setTimeout(lossNotification, 1000);
        setTimeout(assignNumberAndStart, 4000);

    }
    else if(userGuess === targetNumber){
        winTally++
        $(".wintext").html(winTally);
        setTimeout(winNotification, 1000);
        setTimeout(assignNumberAndStart, 4000);

    }

    
}


assignNumberAndStart();