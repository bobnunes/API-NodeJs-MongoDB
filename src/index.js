const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('../controllers/authController')(app);
require('../controllers/projectController')(app);

app.use((req, res, next) => {
    const erro = new Error('Route not found');
    erro.status = 404;
    next(erro);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.listen(3000);