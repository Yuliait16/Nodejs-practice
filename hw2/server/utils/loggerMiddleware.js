const fs = require('fs');

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.path}, ${req.method}`);
    next()
}

exports.loggerMiddleware = loggerMiddleware;