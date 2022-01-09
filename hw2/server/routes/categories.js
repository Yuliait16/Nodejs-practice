const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const categoriesController = require('../controllers/categories');
const { loggerMiddleware }  = require('../utils/loggerMiddleware')

router
    .route('/categories')
    .get(loggerMiddleware)
    .post(loggerMiddleware)
    .patch(loggerMiddleware)
    .delete(loggerMiddleware);

router.get('/categories', categoriesController.find);

router.get('/categories/:id', categoriesController.findOne);

router.post('/categories', categoriesController.create);

router.patch('/categories/:id', categoriesController.update);

router.delete('/categories/:id', categoriesController.remove);

module.exports = router