export function requestLogger(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const timestamp = new Date().toISOString();
    // console.log(req);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`IP: ${ip}`);
    console.log(`Timestamp: ${timestamp}`);
    next();
}