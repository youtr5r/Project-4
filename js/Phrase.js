//makes the phrase lowercase
class Phrase {
   constructor (phrase) {
      this.phrase = phrase.toLowerCase();
   }

//adds phrase to display on gameboard
   addPhraseToDisplay () {
       
      let ul = document.querySelector('#phrase ul');
      ul.innerHTML = '';
        const splitter = this.phrase.split('');
        splitter.forEach(letter => {
             const li = document.createElement('li');
             ul.appendChild(li);
             if (letter === ' ') {
                  li.className = ('space');
             } else {
                  li.innerHTML = letter;
                  li.className = (`hide letter ${letter}`);
             }
        });
   }

//function to see if the letter that's chosen by the user is a match of a letter in the phrase
   checkLetter(letter) {
        return this.phrase.indexOf(letter) >= 0;
   }

//if letter selected matches any letter in the phrase it will show on gameboard
   showMatchedLetter(letter) {
        let lettersThatMatch = $(`.${letter}`);
        $(lettersThatMatch).removeClass('hide').addClass('show');
   }
}