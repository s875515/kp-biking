var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '');

game.state.add('Boot', KpBiking.Boot);
game.state.add('Preloader', KpBiking.Preload);
game.state.add('MainMenu', KpBiking.MainMenu);
game.state.add('Game', KpBiking.Game);

game.state.start('Boot');
