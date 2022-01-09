const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const postsController = require('../controllers/posts');
const { loggerMiddleware }  = require('../utils/loggerMiddleware')

router
    .route('/posts')
    .get(loggerMiddleware)
    .post(loggerMiddleware)
    .patch(loggerMiddleware)
    .delete(loggerMiddleware);

router.get('/posts', postsController.find);

router.get('/posts/:id', postsController.findOne);

router.post('/posts', postsController.create);

router.delete('/posts/:id', postsController.remove);

module.exports = router