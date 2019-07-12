// let game;
// const game = new Game();
// const startButton = document.getElementById("btn_reset");
// //when the button is clicked it will start a new game. 
// startButton.addEventListener('click', function(){
//     game.startGame();
//     //game.handleInteraction();
// });
let game;
//select start game button and adds event listener to it to start new game
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', () => {
  
  game = new Game();
  game.startGame();
  
  //game.handleInteraction();  
});
const keyBoardButton = Array.from(document.querySelectorAll("#qwerty button"));
   keyBoardButton.forEach( (item) => {
     item.addEventListener("click", event => game.handleInteraction(event.target));
     });

//console.log(`Phrase - phrase: ${phrase.phrase}`);

