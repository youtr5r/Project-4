/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            new Phrase('Team Treehouse'),
            new Phrase('Classes contain objects'),
            new Phrase('Objects have properties'),
            new Phrase('Javascript is fun'),
            new Phrase('Callback function')
    ];
        this.activePhrase = null;
  
        
    }
    
  
    /**
     * This method will select a random phrases property
     * Return phrases variable because it contains all of the phrases
     */
    getRandomPhrase() {
        let phraseGenerator = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseGenerator];
        }  
     
        //hides start screen and generates a random phrase 
        startGame() {
            document.getElementById("overlay").style.display = "none";
            const randomPhrase = this.getRandomPhrase();
            this.activePhrase = randomPhrase;
            randomPhrase.addPhraseToDisplay();
            
            //this.ready =true;
            
        }
        
        //checks for win
        checkForWin() {
          let gameLetters = Array.from(document.querySelectorAll('#phrase.section ul li.letter'));
          return myli.every( element => element.classList.contains('show'));
        }
  
        //handler controls button click
        //handler for whole window
        handleInteraction(button) {
          let letter = button.innerHTML;      
          const checker = this.activePhrase.checkLetter(letter);        
          button.setAttribute('disabled',true);
          if (checker) {      
            button.classList.add('chosen');
            game.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
              this.gameOver(true);
              //this.setBackground('loser');
            }
          } else {      
            button.classList.add('wrong');
            this.removeLife();
          }
      
        }
  /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
   removeLife() {
      let lives = document.getElementsByClassName('tries');
      lives = Array.from(lives);
      lives = lives.filter( el => el.firstChild.getAttribute("src") === "images/liveHeart.png");
      lives[0].firstChild.setAttribute('src','images/lostHeart.png');
      this.missed += 1;
      if (this.missed === 5){
        this.gameOver(false);
      }
    }
   
    gameOver(gameWon) {
      const startScreen = document.querySelector('#overlay');
      const gameOverMessage = document.getElementById("game-over-message");
      if(gameWon) {
      startScreen.style.display = 'show';
      startScreen.classList.remove('start','lose');
      startScreen.classList.add('win');
      gameOverMessage.textContent = "Winner Winner Chicken Dinner";
      } else {    
      startScreen.style.display = 'show';
      startScreen.classList.remove('start','win');
      startScreen.classList.add('lose');
      gameOverMessage.textContent = "Sorry, No chicken dinner for you";
      }
      this.resetGame();
    }
    
     //resets game. Array.from returns array from objecr
     resetGame() {
      Array.from(document.querySelectorAll('#phrase li')).forEach(el => el.remove());
      let buttons = document.selectElementsByClassName('.key');
      buttons.forEach(el => {
        el.removeAttribute('disabled');
        el.classList.remove('chosen','wrong');
        el.classList.add('key');
      });
      document.querySelectorAll('.tries img').forEach(img => img.src = "images/liveHeart.png");
      this.missed = 0;
    } 
  
  
  }
  