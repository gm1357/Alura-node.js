express = require('express');
load = require('express-load')
bodyParser = require('body-parser');

module.exports = function() {
    app = express();
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}