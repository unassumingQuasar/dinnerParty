import axios from 'axios';

const post = (url, postData, callback) => {
  axios.post(url, postData)
    .then((res) => callback(res))
    .catch((res) => console.error(res));
};

export default post;
