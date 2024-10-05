const rateLimit = new Map();

function rateLimiter(req, res, next) {
    const ip = req.ip;
    const now = Date.now();
    const windowStart = now - 30000;

    if (!rateLimit.has(ip)) {
        rateLimit.set(ip, []);
    }

    const requestTimeStamps = rateLimit.get(ip);
    const requestsInWindow = requestTimeStamps.filter(timestamp => timestamp > windowStart);

    if (requestsInWindow.length >= 5) {
        return res.status(429).json({
            error: 'You have reached the limit of requests. Please try again after 30 seconds'
        });
    }

    requestTimeStamps.push(now);
    rateLimit.set(ip, requestTimeStamps);

    next();
}

module.exports = rateLimiter;