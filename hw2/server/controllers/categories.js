const categoryModel = require('../models/category');

module.exports = class CategoriesController {

    create(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                error: 'Incorrect format'
            })
        }

        categoryModel.create({ name }, (error, category) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.status(201).json(category);
        });
    }

    update(req, res) {
        const { id } = req.params;

        const { data } = req.body;
        categoryModel.update({'_id':id}, data, {}, (error, category) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!category) {
                return res.status(404).json({
                    error: 'The category not found'
                })
            }

            res.json(category);
        })
    }

    remove(req, res) {
        const { id } = req.params;

        categoryModel.remove({'_id':id}, (error, category) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!category) {
                return res.status(404).json({
                    error: 'The category not deleted'
                })
            }

            res.json({ message: `The category with id ${id} was deleted`})
        })
    }

    find(req, res) {
        categoryModel.find((error, categories) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            res.json(categories);
        });
    }

    findOne(req, res) {
        const { id } = req.params;

        categoryModel.findOne({'_id':id}, (error, category) => {
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            if (!category) {
                return res.status(404).json({
                    error: 'The category is not found'
                })
            }

            res.json(category);
        });
    }
}