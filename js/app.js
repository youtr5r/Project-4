let game;

//event handler will create a new game after reset button is clicked
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
});

$('.key').on('click', function (key) {
    game.handleInteraction(key);
});


