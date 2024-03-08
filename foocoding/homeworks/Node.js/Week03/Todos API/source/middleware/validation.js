const todoSchema = require('../schemas/schema');

const validationMiddleware = (req, res, next) => {
    const { error } = todoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validationMiddleware;