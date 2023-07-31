// DOM ELEMENTS
const gameArchive = document.querySelector('#archive');
const formContainer = document.getElementById('formContainer');
const form = document.querySelector('#form');

// for pre made game
const ww = document.createElement('img').src = 'img/game-covers/windwaker.jpg';
const la = document.createElement('img').src = 'img/game-covers/links-awakening.jpg';
const yk = document.createElement('img').src = 'img/game-covers/yakuza.jpg';
const sonic = document.createElement('img').src = 'img/game-covers/sonic.jpg';

const windwaker = { 
    title: 'The Legend of Zela: The Wind Waker',
    genre: 'Adventure/Puzzle',
    hours: 150,
    completed: 'completed',
    image: ww
}

const linksAwakening = {
    title: 'The Legend of Zela: Link\'s Awakening',
    genre: 'Adventure/Puzzle',
    hours: 70,
    completed: 'completed',
    image: la
}

const yakuza = {
    title: 'Yakuza Kiwami 2 (Sub)',
    genre: 'Action/Adventure',
    hours: 70,
    completed: 'completed',
    image: yk
}

const SA2 = {
    title: 'Sonic Adventure 2 Battle',
    genre: 'Action/Adventure',
    hours: 1000,
    completed: 'completed',
    image: sonic
}

let archive = [windwaker,linksAwakening,SA2,yakuza];


function Game(title, genre, hours, completed, image){
    this.title = title,
    this.genre = genre,
    this.hours = hours,
    this.completed = completed,
    this.image = image
};

function addGameToLibrary(){
    // Game values
    let title = document.querySelector('#gameTitle').value;
    let genre = document.querySelector('#gameGenre').value;
    let hours = document.querySelector('#gameHours').value;
    let completed = document.querySelector('#gameCompleted').value;
    console.log(completed)

    // image url
    let imageFile = document.querySelector('#gameImage');
    let image;
    if(imageFile.files.length == 0){
        imageElement = document.createElement('img');
        image = imageElement.src = 'img/placeholder.jpg';
    }
    else {
       image = imageFile.src = URL.createObjectURL(imageFile.files[0]);
    }

    let newGame = new Game(title,genre,hours,completed,image);
    archive.push(newGame)
    console.log(archive)
};

function removeCard(game) {
    archive.splice(game,1);
    displayArchive()
    console.log(archive)
};

function displayArchive(){
    gameArchive.innerHTML = '';
    for(let i = 0; i < archive.length; i++){
        let gameTitle = archive[i].title;
        let gameGenre = archive[i].genre;
        let gameHours = archive[i].hours;
        let gameCompleted = archive[i].completed;
        let gameImage = archive[i].image;

        let gameCard = document.createElement('div');
        gameCard.innerHTML = `
        <span>
            <div class="game-img">
            <img src="${gameImage}">
            </div>
            <div class="card-text" id="cardText">
                <button class="remove-btn" onclick="removeCard(${i})">&#10006;</button>
                <h2>${gameTitle}</h2>
                <p>${gameGenre}</p>
                <p>${gameHours} hours</p>
                <select id="selected" class="completed-select">
                    <option value="not completed">Not completed</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </span>
        `
        gameCard.classList = 'game-card';
        gameArchive.appendChild(gameCard);
        
        // set users completed select
        const selected = document.querySelector('#selected').value = `${gameCompleted}`;
    }
};

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    addGameToLibrary();
    displayArchive();
    formContainer.style.display = 'none'

    let title = document.querySelector('#gameTitle').value = '';
    let genre = document.querySelector('#gameGenre').value = '';
    let hours = document.querySelector('#gameHours').value = '';
    let imageFile = document.querySelector('#gameImage').value = '';
});


function displayForm(){
    formContainer.style.display = 'block';
}

function removeForm(){
    formContainer.style.display = 'none'
}

displayArchive()
