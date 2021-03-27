import bookChapterBuilder from '../components/forms/bookChapterBuilder';
import characterBuilder from '../components/forms/characterBuilder';
import { getBookChapter, getSingleBook } from '../helpers/data/bookData';
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
    if (e.target.id.includes('view-book')) {
      const id = e.target.id.split('--')[1];
      getSingleBook(id).then(getBookChapter(id).then((chapter) => bookChapterBuilder(chapter)));
      // getBookChapter(id).then((chapter) => bookChapterBuilder(chapter));
    }
  });
};

export default domEvents;
