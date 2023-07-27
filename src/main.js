const gameArchive = document.querySelector('#archive');
const form = document.querySelector('#form')

let archive = [];
let game;

function Game(title){
    this.title = title
    // this.completed = completed,
}

function addGameToLibrary(){
    let title = document.querySelector('#gameTitle').value;
    let newGame = new Game(title);
    archive.push(newGame)
    console.log(archive)
}

function displayArchive(){
    gameArchive.innerHTML = '';
    for(let i = 0; i < archive.length; i++){
        let gameTitle = archive[i].title;
        let gameCard = document.createElement('div');
        gameCard.innerHTML = `<h2>${gameTitle}<h2>`
        gameCard.classList = 'game-card';
        gameArchive.appendChild(gameCard)
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    addGameToLibrary();
    displayArchive();
})


