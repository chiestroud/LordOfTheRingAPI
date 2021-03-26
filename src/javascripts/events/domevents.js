import characterBuilder from '../components/forms/characterBuilder';
import getCharacter from '../helpers/data/characterData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('first')) {
      getCharacter(1).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('second')) {
      getCharacter(2).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('third')) {
      getCharacter(3).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('four')) {
      getCharacter(4).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('five')) {
      getCharacter(5).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('six')) {
      getCharacter(6).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('seven')) {
      getCharacter(7).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('eight')) {
      getCharacter(8).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('nine')) {
      getCharacter(9).then((characterObject) => characterBuilder(characterObject));
    }
    if (e.target.id.includes('ten')) {
      getCharacter(10).then((characterObject) => characterBuilder(characterObject));
    }
  });
};

export default domEvents;
