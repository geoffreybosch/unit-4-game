var win = 0;
var loss = 0;
var answer = "";
var u = 0;

function updateAnswer(){
    answer = parseInt([Math.floor(Math.random() * 100)]);
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
    }
    else if(answer < u){
        loss= loss + 1;
        $("losses").text(loss);
        updateAnswer();
        u=0
        $("#score").text(u)
    }
}


$("#crystal-1").on('click', function(){
    u= u+8
    $("#score").text(u)
    checkScore()
})
$("#crystal-2").on('click', function(){
    u= u+3
    $("#score").text(u)
    checkScore()
})
$("#crystal-3").on('click', function(){
    u= u+5
    $("#score").text(u)
    checkScore()
})
$("#crystal-4").on('click', function(){
    u= u+2
    $("#score").text(u)
    checkScore()
})


