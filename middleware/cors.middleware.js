const allowedOrigins = [
    'http://localhost:3001',
    'https://breathewellness.org',
];

const corsMiddleware = (req, res, next) => {
    if (allowedOrigins.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};

module.exports=corsMiddleware;