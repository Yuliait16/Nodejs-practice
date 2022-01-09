const postModel = require('../models/post');

module.exports = class PostsController {

    create(req, res) {
        const { name, body, excerpt, categories, tags, author } = req.body;
        if (!name || !body || !categories || !tags || !author) {
            return res.status(400).json({
                error: 'Incorrect format'
            })
        }

       postModel.create({ name, body, excerpt, categories, tags, author }, (error, post) => {
            if (!post) {
                return res.status(404).json({
                    error: 'The post is not found'
                })
            }

           res.status(201).json(post);
           res.json(post);
        });
    }

    update(req, res) {
        const { id } = req.params;

        const { data } = req.body;
        postModel.update({"_id":id}, data, {}, (error, post) => {
            if (!post) {
                return res.status(404).json({
                    error: 'The post is not found'
                })
            }

            res.json(post);
        })
    }

    remove(req, res) {
        const { id } = req.params;

        postModel.remove({'_id': id}, (error, post) => {
            if (!post) {
                return res.status(404).json({
                    error: 'The post not deleted'
                })
            }

            res.json({ message: `The post with id ${post._id} was deleted`})
        })
    }

   find(req, res) {
        postModel.find((error, posts) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.json(posts);
        });
    }

    findOne(req, res) {
        const { id } = req.params;

        postModel
            .findOne({'_id':id},(error, post) => {
                if (!post) {
                    return res.status(404).json({
                        error: 'The post is not found'
                    })
                }

                res.json(post);
            })
            .populate('authors')
            .populate('tags')
            .populate('categories');
    }
}