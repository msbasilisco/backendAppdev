const logRequest = (req, res, next) =>{
    const methodType = req.method;
    const route = req.originalUrl;
    const timestamp = new Date().toISOString();

    console.log('Method: ${methodType}, Route: ${route}, Timestamp : ${timestamp}');
    next();
}


module.exports = logRequest;
