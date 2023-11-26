const middleware = (req, res, next) => {
    console.log("MIDDLEWARE");
    next();
}

module.exports = middleware;