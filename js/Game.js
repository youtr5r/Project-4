/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    createPhrases() {
        let phrases = [
            new Phrase('fail early and fail often'),
            new Phrase('To be or not to be'),
            new Phrase('Jacob I am your father'),
            new Phrase('Excuses are tools of the incompetent'),
            new Phrase('JavaScript is fun'),
            new Phrase('Classes contain objects'),
            new Phrase('Objects have properties'),
            new Phrase('Encapsulation is data hidden inside an object'),
            new Phrase('An array is a sequence of data')
           
        ];
        return phrases;
        //update this with phrases.length
        function getRandomPhrase() {
            return Math.floor(Math.random() * Math.floor
        }
    }
 }