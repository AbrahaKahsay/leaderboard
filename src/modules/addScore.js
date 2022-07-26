const id = '8XzEIsjyhszFgOK9DbUH';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
const addScore = async (object) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: object,
  });
};

const getScores = async () => {
  const scores = await fetch(url);
  return scores.json();
};

const createScore = (user, score, element) => {
  const newElement = document.createElement('li');
  newElement.textContent = `${user}: ${score}`;
  element.appendChild(newElement);
};

const createList = (array, element) => {
  element.innerHTML = '';
  array.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.textContent = `${item.user}: ${item.score}`;
    element.appendChild(newItem);
  });
};

export {
  addScore, getScores, createScore, createList,
};