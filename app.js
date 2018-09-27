// LECTURE 1: Basic DOM Manipulation


// Setting main variables

var scores, scoresOfRounds, activePlayer, gamePlaying;


newGame();

// Scores

// using getElementById to change the display of ALL scores to what we want, in this case it is 0.
// its possible to use querySelector for this, but getElementById is faster.

/*

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

*/


// Dice

/*
dice = Math.floor(Math.random() * 6) + 1; // <--- this MATH function will give us random number between 1 and 6.
console.log(dice)
*/

// DOCUMENT OBJECT to select from our HTML
// use querySelector() along with it.
// use textContext and make it equal to what you want, in our case its = dice;

// textContent == cant set ONLY plain text. NOT HTML


//document.querySelector('#current-0').textContent = dice;


// use innerHTML to acces the HTML portions.
/*
document.querySelector('#current-' + activePlayer ).innerHTML = '<em>' + dice + '</em>';
*/

// We can use querrySelector to manipulate CSS too, access it with .style.dispaly
document.querySelector('.dice').style.display = 'none';



// LECTURE 2: Events


// addEventListener to the querySelector


// CALLBACK FUNCTION example
/*

function btn() {
  // code here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn)  // <-- 'click' is a type of event. There are many kinds.
// btn is our function that we want to ACTIVATE when the BUTTON is CLICKED.
// when btn function is activated, its called CALLBACK FUNCTION.

*/

// ANNONYMOUS FUNCTION example


document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) { // <-- This IF STATEMENT was added in LECTURE %
           

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Diplay the result
        // create a variable to store the document.querySelector to access it easier.
        // we can access the IMAGES with src and using the IMAGE'S NAME and TYPE.
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';



        // 3. Update the round score IF the rolled number was NOT a 1;
        // We update this in LECTURE 3~~!

        if (dice !== 1) {
            // Add score
            scoresOfRounds = scoresOfRounds + dice;
            // the above is the same as scoreOfRounds = scoreOfRounds + dice
            document.querySelector('#current-' + activePlayer).textContent = scoresOfRounds;
        } else {

            // calling the FUNCTION nextPlayer(); (FROM LECTURE 4)
            nextPlayer();
        }

}


});
// unlike CALLBACK FUNCTION we write our fucntion right after 'click'. 





// LECTURE 3: TERNARY OPERATOR ( Updating scores and Active Player)




// Example below, its just an easier/shorter version of IF STATEMENT

//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

// question mark (?) means THEN
// (  :  ) means ELSE


// using classList + add/remove  
// we can add and remove classes dynamically


// LECTURE 4: SETTING THE HOLD BUTTON


document.querySelector('.btn-hold').addEventListener('click', function () {

    
    if(gamePlaying) { // <-- This IF statement was added in LECTURE 5
        
            // Add CURRENT score to GLOBAL score
    scores[activePlayer] += scoresOfRounds;
    // scores[activePlayer] = scores[activePlayer] + scoresOfRounds;


    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // Check if player won the game

    if (scores[activePlayer] >= 15) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {

        //Next Player//
        // Calling the FUNCTION nextPlayer() (FROM LECTURE 4)
        nextPlayer();
    }
        
    }
    





});


function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // setting scoreOfRounds to 0
    scoresOfRounds = 0;

    // updating the interface
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    // updating ACTIVE PLAYER INTERFACE
    //document.querySelector('.player-0-panel').classList.add('active');
    //document.querySelector('.plyaer-0-panel').classList.remove('active');

    // using TOGGLE, if class IS there it REMOVES it, if it is NOT there then it ADDS it

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // making dice vanish once its the turn of the other player
    document.querySelector('.dice').style.display = 'none';



}



// LECTURE 5: CREATING GAME INITIALIZATION FUNCTION


document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame() {
    scores = [0, 0];
    activePlayer = 0;
    scoresOfRounds = 0;
    
    // SET gamePlyaing to TRUE in the beginning.
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


};





// LECTURE 6: STATE VARIABLES

// Declare/add gamePlaying variable to the global variables on top of this page.


// its a TRUE or FALSE variable.
