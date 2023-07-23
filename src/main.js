const gameArchive = document.querySelector('#archive');


let archive = [];
let newGame;

function Game(title){
    this.title = title
    // this.completed = completed,
}

function displayArchive(){
    for(let i = 0; i < archive.length; i++){
        let gameTitle = archive[i].title;
        gameArchive.append(gameTitle)
        console.log(archive[i])
    }
}

function addGameToArchive(){
    let game = prompt();
    newGame = new Game(game);
    archive.push(newGame);
    displayArchive();
}



addGameToArchive()