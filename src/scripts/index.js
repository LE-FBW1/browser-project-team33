// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/



// \/ All of your javascript should go here \/
const saveScoreButton = document.getElementById('saveScoreButton');

const saveHighScore = evt => {
    console.log('Twoja stara');
    evt.preventDefault();  
};

saveScoreButton.addEventListener('click', saveHighScore);