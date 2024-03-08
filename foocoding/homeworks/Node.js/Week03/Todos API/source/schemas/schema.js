const Joi = require('joi');

// Define your validation schema using Joi
const todoSchema = Joi.object({
    title: Joi.string().required(),
    completed: Joi.boolean().required()
});

module.exports = todoSchema;
