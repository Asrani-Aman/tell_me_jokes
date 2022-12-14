const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const list = document.querySelector('#list');
console.log(list);

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    // console.log(res);
    return res.data.joke;
  } catch (e) {
    return 'No Jokes Available Sorry :(';
  }
};

button.addEventListener('click', addNewJoke);
