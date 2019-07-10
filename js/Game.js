/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            new Phrase('Fail early and fail often'),
            new Phrase('Classes contain objects'),
            new Phrase('Objects have properties'),
            new Phrase('Encapsulation is data hidden inside an object'),
            new Phrase('An array is a sequence of data')
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
        
 }
 