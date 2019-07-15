/*
* add a game class.
* create constructor with an empty parameter.
* setting the missed to 0. this will act as a counter during the game.
* make array of 5 phrases
*/
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();                      
        this.activePhrase = null;
    } 
createPhrases() {
    const myPhrases =  [
        new Phrase ('Dallas Cowboys'),
        new Phrase ('Atlanta Falcons'),
        new Phrase ('Denver Broncos'),
        new Phrase ('Houston Texans'),
        new Phrase ('Kansas City Chiefs')
    ];
    return myPhrases;
}
//generates a random phrase
    getRandomPhrase() {            
        let randomPhrases = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrases];  
    }

/*
handles the users interaction and checks letter against phrase.
this will check for win  and adds chosen class otherwise(else) it will add wrong class and remove life.
*/
    handleInteraction (e) {
        if (this.activePhrase.checkLetter(e.target.textContent)) {
            this.activePhrase.showMatchedLetter(e.target.textContent);
            $(e.target).addClass('chosen').attr('disabled', true);
            this.checkForWin();
        } else {
            $(e.target).addClass('wrong').attr('disabled', true);
            this.removeLife();
        }  
    };

//This will count how many hearts are being deducted and if the total number of deducted hearts equals 5 the game is over
    removeLife() {
        this.missed+=1;
            if (this.missed <= 5) {
                $('.tries [src="images/liveHeart.png"]:first').attr('src', "images/lostHeart.png");
            } 

            if (this.missed === 5) {
                this.gameOver();
            }
    }

//if game is one it will be true. If game is lost it will return false
    checkForWin() {
        if ($('.hide').length === 0) {
            this.gameOver(true);
        } 
        // else{
        //     this.gameOver(false);
        // }
    }

//this method shows the dialog box after the game letting the user know if they won or lost 
    gameOver (gameWon) {
        // console.log(gameWon);
        $('#overlay').show();
        if (gameWon) {
            $('#game-over-message').text('You win!');
            $('.start').removeClass('lose').addClass('win');
        } else {
            $('#game-over-message').text('You lose!');
            $('.start').removeClass('win').addClass('lose'); 
        }
        this.resetGame();
    }

//this method resets the entire game by removing the li elements 
    resetGame () {
        $('#phrase ul li').remove();
        $('.key').removeClass('chosen').removeClass('wrong').removeAttr('disabled');
        $('.tries [src="images/lostHeart.png"]').attr('src', "images/liveHeart.png");
    }

// selects element by id and hides that element(dialogue box).
//gets random phrase
startGame () {
    $('#overlay').hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay(); 
    }

}
