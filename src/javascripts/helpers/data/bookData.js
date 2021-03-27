import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getBook = () => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.authorization}` } };
  axios.get('https://the-one-api.dev/v2/book', config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

const getSingleBook = (id) => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.authorization}` } };
  axios.get(`https://the-one-api.dev/v2/book/${id}`, config)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getBookChapter = (id) => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.authorization}` } };
  axios.get(`https://the-one-api.dev/v2/book/${id}/chapter`, config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

export { getBook, getSingleBook, getBookChapter };
