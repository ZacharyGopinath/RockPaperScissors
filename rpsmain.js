document.getElementById("rockText").addEventListener("click", function win() {
    document.getElementById("pickText").innerHTML = "Rock";
    document.getElementById("resultText").innerHTML = "Loss";
    document.getElementById("botPickText").innerHTML = "Paper";
    document.getElementById('computerWins').textContent = parseInt(document.getElementById('computerWins').textContent) + 1;
});

document.getElementById("paperText").addEventListener("click", function win() {
    document.getElementById("pickText").innerHTML = "Paper";
    document.getElementById("resultText").innerHTML = "Loss";
    document.getElementById("botPickText").innerHTML = "Scissors";
    document.getElementById('computerWins').textContent = parseInt(document.getElementById('computerWins').textContent) + 1;
});

document.getElementById("scissorsText").addEventListener("click", function win() {
    document.getElementById("pickText").innerHTML = "Scissors";
    document.getElementById("resultText").innerHTML = "Loss";
    document.getElementById("botPickText").innerHTML = "Rock";
    document.getElementById('computerWins').textContent = parseInt(document.getElementById('computerWins').textContent) + 1;
});