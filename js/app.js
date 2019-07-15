let game;

//event handler will create a new game after reset button is clicked
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
});

$('.key').on('click', function (key) {
    game.handleInteraction(key);
});

//adds keyboard functionality for game.
$(document).on('keyup', function (e) {
    let letterKey = [];
    if (letterKey.includes(e.key.toLowerCase())) {
        for (let key of  $('.key')) {
            if (key.innerText == e.key.toLowerCase()) {
                key.click();
            }
        }
    }
    
});