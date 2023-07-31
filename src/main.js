// DOM ELEMENTS
const gameArchive = document.querySelector('#archive');
const formContainer = document.getElementById('formContainer');
const form = document.querySelector('#form');


let archive = [];


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
            <button class="remove-btn" onclick="removeCard(${i})">&#10006;</button>
            </div>
            <div class="card-text" id="cardText">
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

