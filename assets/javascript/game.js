var win = 0;
var loss = 0;
var answer = "";
var u = "";

function updateAnswer(){
    var rand = [Math.floor(Math.random() * 80)];
    answer = parseInt(rand);
    $("#score").text(answer);
}
updateAnswer();

function scoreCheck(){
    $('losses').text = loss;
    if (answer == "p"){
        if (u=="s"){
            win= win + 1;
            $("wins").text(win);
            updateAnswer();
        }
    }
}