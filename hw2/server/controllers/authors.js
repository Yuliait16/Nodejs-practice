const authorModel = require('../models/author');

module.exports = class AuthorsController {

    create(req, res) {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                error: 'Incorrect format'
            })
        }

        authorModel.create({ name, email }, (error, author) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.status(201).json(author);
        });
    }

    update(req, res) {
        const { id } = req.params;

        const { data } = req.body;
        authorModel.update({'_id':id}, data, {}, (error, author) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!author) {
                return res.status(404).json({
                    error: 'The author is not found'
                })
            }

            res.json(author);
        })
    }

    remove(req, res) {
        const { id } = req.params;

        authorModel.remove({'_id':id}, (error, author) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!author) {
                return res.status(404).json({
                    error: 'The author not deleted'
                })
            }

            res.json({ message: `The author with id ${id} was deleted`})
        })
    }
    
    find(req, res) {
        authorModel.find((error, authors) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.json(authors);
        });
    }

    findOne(req, res) {
        const { id } = req.params;

        authorModel.findOne({'_id':id}, (error, author) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!author) {
                return res.status(404).json({
                    error: 'The author is not found'
                })
            }

            res.json(author);
        });
    }
}