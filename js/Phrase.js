/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
       this.phrase = phrase;
    }
    addPhraseToDisplay() {
      //Create a variable to reference the ID where the <ul></ul> is located
      let ul = document.getElementById('phrase');
      ul.innerHTML = "";
      //used split method to split a string into an array of substrings
      const splitter = this.phrase.split("");
       splitter.forEach( letter => {
           let li = document.createElement('li');
           ul.append(li);
           if (letter === " ") {
              li.className += " space";
           } else {
               li.innerHTML = letter;
               li.className += ' letter',`${letter}`;
           }
       });
   }
    };
   //  img.classList.add("profilePic");
   //  className += " profilePic";