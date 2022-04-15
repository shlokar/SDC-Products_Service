const axios = require('axios');
const router = require('express').Router();

const {
  getProdDataFromAPI,
  getProdStyleDataFromAPI,
  getReviewsDataFromAPI,
  getProdQsDataFromAPI,
  getRelatedProdsFromAPI,
} = require('./apiFunctions');

const getAllData = (id, callback) => {
  const prodDataPromise = getProdDataFromAPI(id);
  const prodStyleDataPromise = getProdStyleDataFromAPI(id);
  const prodReviewDataPromise = getReviewsDataFromAPI(id);
  const prodQsDataPromise = getProdQsDataFromAPI(id);
  axios.all([prodDataPromise, prodStyleDataPromise, prodReviewDataPromise, prodQsDataPromise])
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      callback(err);
    });
};

const get = (req, res) => {
  getAllData(req.query.product_id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

router.get('/data', get);

router.get('/related', (req, res) => {
  getRelatedProdsFromAPI(req.query.product_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/data-product', (req, res) => {
  getProdDataFromAPI(req.query.product_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/data-styles', (req, res) => {
  getProdStyleDataFromAPI(req.query.product_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/data-reviews', (req, res) => {
  getReviewsDataFromAPI(req.query.product_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
