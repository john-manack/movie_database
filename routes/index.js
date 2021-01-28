'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Homepage',
        },
        partials: {
            body: 'partials/home',
        }
    });
});

module.exports = router;