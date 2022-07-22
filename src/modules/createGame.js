const setID = (object) => {
  window.localStorage.setItem('id', object.result);
};

const getID = () => {
  let string = '';
  if (window.localStorage.getItem('id')) {
    string = window.localStorage.getItem('id').slice(14, 35);
  }
  return string;
};

const creatGame = async (data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });
  response.json().then((object) => {
    setID(object);
  });
};

export {
  setID, getID, creatGame,
};