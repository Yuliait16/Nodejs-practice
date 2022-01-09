const tagModel = require('../models/tag');

module.exports = class TagsController {

    create(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                error: 'Incorrect format'
            })
        }

        tagModel.create({ name }, (error, tag) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.status(201).json(tag);
        });
    }

    update(req, res) {
        const { id } = req.params;

        const { data } = req.body;
        tagModel.update({'_id':id}, data, {}, (error, tag) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!tag) {
                return res.status(404).json({
                    error: 'The tag is not found'
                })
            }

            res.json(tag);
        })
    }

    remove(req, res) {
        const { id } = req.params;

        tagModel.remove({'_id':id}, (error, tag) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!tag) {
                return res.status(404).json({
                    error: 'The tag not deleted'
                })
            }

            res.json({ message: `The tag with id ${id} was deleted`})
        })
    }

    find(req, res) {
        tagModel.find((error, tags) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.json(tags);
        });
    }

    findOne(req, res) {
        const { id } = req.params;

        const tag = tagModel.findOne({'_id':id}, (error, tag) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!tag) {
                return res.status(404).json({
                    error: 'The tag is not found'
                })
            }

            res.json(tag);
        });
    }
}