(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const mouse = document.querySelector('#hideOverlay')

    document.addEventListener("DOMContentLoaded", function() {
        // Function to show the overlay
        function showOverlay() {
            const overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
        }

        // Add click event listener to containerTwo
        const containerTwo = document.querySelector(".containerTwo");
        containerTwo.addEventListener("click", showOverlay);
    });

    mouse.addEventListener("click", function() {
        // Function to hide the overlay
        function hideOverlay() {
            const overlay = document.getElementById("overlay");
            overlay.style.display = "none";
        }
        hideOverlay();
    });
    

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0, //arrays have index (which player I am looking at)
        gameEnd: 29
    };

startGame.addEventListener("click",function(){

    gameData.index = Math.round(Math.random());
    console.log(gameData.index);

    gameControl.innerHTML = '<h2>The Game Has started</h2>';
    gameControl.innerHTML += '<button id = "quit"> Wanna Quit?</button>';
    
    document.getElementById('quit').addEventListener("click", function(){
        location.reload();

    });
    setUpTurn();
});

function setUpTurn(){
    game.innerHTML = `<p>Roll the Dice for the ${gameData.players[gameData.index]}</p>`;
    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
    document.getElementById('roll').addEventListener('click', function(){
        //console.log("roll the dice!");
        throwDice();
    });
};
function throwDice(){
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    gameData.roll2 =  Math.floor(Math.random() * 6) + 1;
    playclickSound();
    
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}"width = "200px" height = "200px">
                        <img src = "${gameData.dice[gameData.roll2-1]}"width = "200px" height = "200px">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;
    //console.log(gameData.rollSum);

    if( gameData.rollSum === 2){
        //console.log("snake eyes were rolled");
        game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);

        setTimeout(setUpTurn, 2000);
    }
    else if(gameData.roll1 === 1 || gameData.roll2 === 1){
        console.log("one of the two dice was a 1");
        game.innerHTML+= `<p> Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
        setTimeout(setUpTurn, 2000);
    }
    
    else{
        //console.log("the game proceeds");
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id = "rollagain">Roll again</button> or <button id = "pass">Pass</button>';

        document.getElementById('rollagain').addEventListener('click',function(){
            setUpTurn();
        });

        document.getElementById('pass').addEventListener('click',function(){
            gameData.index ? (gameData.index= 0) : (gameData.index = 1);
            setUpTurn();
        });

        checkWinningCondition();
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;
            playwinnerSound();

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }else{
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
            ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong></p>`;
        }
    }
    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
        ${gameData.score[1]}</strong></p>`;
    }
}
function playclickSound(){
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
}

function playwinnerSound(){
    const winnerSound = document.getElementById('winnerSound');
    winnerSound.play();
}
    



})();