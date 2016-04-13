import axios from 'axios';

const get = (url, callback) => {
  axios.get(url)
    .then((res) => callback(res))
    .catch((res) => console.error(res));
};

export default get;
