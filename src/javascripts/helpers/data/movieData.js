import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getMovie = () => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.authorization}` } };
  axios.get('https://the-one-api.dev/v2/movie', config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

export default getMovie;
