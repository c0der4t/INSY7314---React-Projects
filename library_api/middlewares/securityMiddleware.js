// cors - configuration options for an express API
// csurf - how it helps for CSRF attacks, and how to configure it for a node.js API
// helmet - how it helps when it comes to header protections and clickjacking
// rate limiting, brute force prevention, and what libraries can be used to implement this for a node.js API

const helmet = require('helmet');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

const securityMiddlewares = (app) => {
    app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "default-src": ["'self'"],
            "frame-ancestors": ["'none'"],
        }
    },
    featurePolicy: {
        features: {
            geolocation: ["'none'"],
            microphone: ["'none'"]
        },
        hidePoweredBy: true,
        frameguard: {
            action : 'deny'
        },
        isNoOpen : true,
    }        
    }));

    app.use(cors(corsOptions));
}

module.exports = { securityMiddlewares };