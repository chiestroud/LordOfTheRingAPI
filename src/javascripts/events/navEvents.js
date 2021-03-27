import bookBuilder from '../components/forms/bookBuilder';
import characterBuilder from '../components/forms/characterBuilder';
import movieBuilder from '../components/forms/movieBuilder';
import { getBook } from '../helpers/data/bookData';
import getCharacter from '../helpers/data/characterData';
import getMovie from '../helpers/data/movieData';

const navEvents = () => {
  document.querySelector('#characters').addEventListener('click', () => {
    getCharacter(1).then((character) => characterBuilder(character));
  });
  document.querySelector('#movies').addEventListener('click', () => {
    getMovie().then((movie) => movieBuilder(movie));
  });
  document.querySelector('#books').addEventListener('click', () => {
    getBook().then((books) => bookBuilder(books));
  });
};

export default navEvents;
