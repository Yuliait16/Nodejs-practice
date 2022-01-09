const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const authorsController = require('../controllers/authors');
const { loggerMiddleware }  = require('../utils/loggerMiddleware')

router
    .route('/authors')
    .get(loggerMiddleware)
    .post(loggerMiddleware)
    .patch(loggerMiddleware)
    .delete(loggerMiddleware);

router.get('/authors', authorsController.find);

router.get('/authors/:id', authorsController.findOne);

router.post('/authors', authorsController.create);

router.patch('/authors/:id', authorsController.update);

router.delete('/authors/:id', authorsController.remove);

module.exports = router