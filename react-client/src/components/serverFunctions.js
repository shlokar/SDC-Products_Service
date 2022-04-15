import axios from 'axios';

const getAllUserData = (id) => new Promise((resolve) => {
  axios.get(`/user/data?product_id=${id}`)
    .then((data) => resolve(data))
    .catch((err) => resolve(err));
});

export default getAllUserData;
