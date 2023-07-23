let archive = [];
let newGame;

function Game(title){
    this.title = title,
    // this.completed = completed,
    this.info = function(){
        console.log(title)
    }
}

function addGameToArchive(){
    let game = prompt();
    newGame = new Game(game);
    archive.push(newGame)
}

addGameToArchive()
console.log(archive)