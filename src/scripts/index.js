// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const playButton = document.querySelector('#play');
const homePage = document.querySelector('#home');
const gamePage = document.querySelector('#game-page');


const displayGamePage = (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    gamePage.style.display = 'flex';
}

playButton.addEventListener('click', displayGamePage);