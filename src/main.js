const gameArchive = document.querySelector('#archive');
const form = document.querySelector('#form')




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

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const gameTitle = document.querySelector('#gameTitle');
    let game =  gameTitle.value;
    console.log(game)
})
