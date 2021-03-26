import characterBuilder from '../components/forms/characterBuilder';
import getCharacter from '../helpers/data/characterData';

const navEvents = () => {
  document.querySelector('#characters').addEventListener('click', () => {
    getCharacter(1).then((character) => characterBuilder(character));
  });
};

export default navEvents;
