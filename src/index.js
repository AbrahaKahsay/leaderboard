import './style.css';
import { getID, creatGame } from './modules/createGame.js';
import {
  addScore, getScores, createScore, createList,
} from './modules/addScore.js';

const newGame = {
  name: 'jump ten times',
};
const game = JSON.stringify(newGame);
const list = document.getElementById('scores-list');
const form = document.getElementById('form');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const refresh = document.getElementById('refresh');

if (!getID()) {
  await creatGame(game);
}

getScores()
  .then((result) => createList(result.result, list));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(JSON.stringify({
    user: userName.value,
    score: userScore.value,
  }));
  createScore(userName.value, userScore.value, list);
});

refresh.addEventListener('click', () => {
  getScores().then((result) => createList(result.result, list));
});