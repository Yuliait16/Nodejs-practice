const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const tagsController = require('../controllers/tags');
const { loggerMiddleware }  = require('../utils/loggerMiddleware')

router
    .route('/tags')
    .get(loggerMiddleware)
    .post(loggerMiddleware)
    .patch(loggerMiddleware)
    .delete(loggerMiddleware);

router.get('/tags', tagsController.find);

router.get('/tags/:id', tagsController.findOne);

router.post('/tags', tagsController.create);

router.delete('/tags/:id', tagsController.remove);

module.exports = router