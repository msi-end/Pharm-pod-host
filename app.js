const express = require('express');
// const compression = require('compression');
const app = express();
// const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const PORT = 8000 || process.env.PORT;
// const LokiStore = require('connect-loki')(session);



// var options = { path: './sessions/authSession.db' };
const adminAuth = require('./controllers/admin.login.js')
const crudAPI = require('./route/crudApiRoute.js')
const sseAPI = require('./route/sseRoute.js')
const apiKeyVerifier = require('./middleware/api.verify.js')
const corsMidware = require('./middleware/cors.middleware.js')

const ClientApi = require('./route/clientSide-API.js')
const UserRoutes = require('./route/userRoute.js')


// const athTime = 1000*60*60*24*15;
// app.use(session({
//     store: new LokiStore(options),
//     secret: "secrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: athTime },
//     resave: false,
// })); 

// app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', __dirname + '/views');
app.set('view engin', ejs);

app.disable('x-powered-by')
// app.use(apiKeyVerifier);


//User Routes
app.use(UserRoutes);

// Client API & 
app.use('/apiV2',corsMidware, ClientApi);


// Admin Crud API & AdminLogin 
app.use('/apiV3', sseAPI);
app.use('/apiV3', apiKeyVerifier, crudAPI);
app.use(apiKeyVerifier, adminAuth);

app.get('*', (req, res) => {
    res.render(path.join(__dirname, 'views/user/error.ejs'));
})
app.listen(PORT, () => { console.log('Running on port ' + PORT) })