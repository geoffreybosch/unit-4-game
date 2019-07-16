var win = 0;
var loss = 0;
var answer = "";
var u = 0;
var answerC1 = "";
var answerC2 = "";
var answerC3 = "";
var answerC4 = "";

function updateAnswer(){
    answer = parseInt([Math.floor(Math.random() * 102)]+19);
    $("#numToGuess").text(answer);
    $("#score").text(u)
}
updateAnswer();

function checkScore(){
    if (answer == u){  
        win= win + 1;
        $("wins").text(win);
        updateAnswer();
        u=0
        $("#score").text(u)
        updateCrystals();
    }
    else if(answer < u){
        loss= loss + 1;
        $("losses").text(loss);
        updateAnswer();
        u=0
        $("#score").text(u)
        updateCrystals();
    }
}

function updateAnswerC1(){
    answerC1 = parseInt([Math.floor(Math.random() * 12)]+1);
}
function updateAnswerC2(){
    answerC2 = parseInt([Math.floor(Math.random() * 12)]+1);
}
function updateAnswerC3(){
    answerC3 = parseInt([Math.floor(Math.random() * 12)]+1);
}
function updateAnswerC4(){
    answerC4 = parseInt([Math.floor(Math.random() * 12)]+1);
}

function updateCrystals(){
    updateAnswerC1();
    updateAnswerC2();
    updateAnswerC3();
    updateAnswerC4();
}

updateCrystals();

$("#crystal-1").on('click', function(){
    u= u+answerC1
    $("#score").text(u)
    checkScore()
})
$("#crystal-2").on('click', function(){
    u= u+answerC2
    $("#score").text(u)
    checkScore()
})
$("#crystal-3").on('click', function(){
    u= u+answerC3
    $("#score").text(u)
    checkScore()
})
$("#crystal-4").on('click', function(){
    u= u+answerC4
    $("#score").text(u)
    checkScore()
})


