const axios = require('axios');

const key = process.env.EDGARS_GH_API_KEY;

function getProdDataFromAPI(productID) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}`, {
      headers: {
        authorization: key,
      },
    })
      .then((results) => {
        resolve(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function getProdStyleDataFromAPI(productID) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/styles`, {
      headers: {
        authorization: key,
      },
    })
      .then((results) => {
        resolve(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function getReviewsDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
      headers: {
        authorization: key,
      },
      params: {
        product_id: productIdParam,
      },
    })
      .then((results) => {
        resolve(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function getProdQsDataFromAPI(productID) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=${productID}`, {
      headers: {
        authorization: key,
      },
    })
      .then((results) => {
        resolve(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function getRelatedProdsFromAPI(productID) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productID}/related`, {
      headers: {
        authorization: key,
      },
    })
      .then((results) => {
        resolve(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

module.exports = {
  getProdDataFromAPI,
  getProdStyleDataFromAPI,
  getReviewsDataFromAPI,
  getProdQsDataFromAPI,
  getRelatedProdsFromAPI,
};
