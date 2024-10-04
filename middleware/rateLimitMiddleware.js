const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs : 30 *1000,
    message: {
        message: "You have reached the limit of request, try again after 30 seconds."
    },
    header: true,

});

module.exports = limiter;