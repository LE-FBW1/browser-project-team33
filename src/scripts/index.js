// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import startGame from './game';

// \/ All of your javascript should go here \/

//Hide main page and display game page when we click on the play button
const playButton = document.querySelector('#play');
const homePage = document.querySelector('#home');
const gamePage = document.querySelector('#game-page');

const displayGamePageAndStartGame = (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    gamePage.style.display = 'flex';
    startGame();
}

playButton.addEventListener('click', displayGamePageAndStartGame);



// go High Score page
const highScoresPage = document.querySelector('#highScores-page');
const highScoresButton = document.querySelector('#highScores-btn');

const displayHighScoresPageAndStartGame = (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    highScoresPage.style.display = 'flex';
}

highScoresButton.addEventListener('click', displayHighScoresPageAndStartGame);


//goHomeButton
const homePageButton = document.querySelector('#goHome-btn');

const displayHomePage = (e) => {
    e.preventDefault();
    homePage.style.display = 'flex';
    highScoresPage.style.display = 'none';
}

homePageButton.addEventListener('click', displayHomePage);

// highScore
const highScoresList = document.getElementById("highScoresList");

//const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//Temporary
const highScores = [{
    score: 100,
    name: "Felix"
}, {
    score: 90,
    name: "Joe"
}, {
    score: 150,
    name: "Steve"
}];


//console.log(highScores);
highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} => ${score.score}</li>`;
    })
    .join("");