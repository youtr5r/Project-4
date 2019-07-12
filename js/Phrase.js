// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Phrase.js */

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
          ul.appendChild(li);
      });
  }
 
  //see if letter that is selected matches a letter in phrase
  //initaly set to false. Once checked equal true
  checkLetter(Letter) {
     let letterPlaceHolder = false;
     for(let i = 0; i <this.phrase.length; i + 1) {
         if (Letter === this.phrase[i]){
             letterPlaceHolder = true
         }
     }
 
  }
 
 
    
 
 
 
     
     showMatchedLetter(letter) {
       const myPhraseWords = document.querySelectorAll('#phrase li');
       ///console.log(myPhraseWords);
       Array.from(myPhraseWords)
       .filter(el => el.textContent.toLowerCase() === letter)
       .map(el => {
         el.classList.remove('hide');
         el.classList.add('show');
         });
     }
   }