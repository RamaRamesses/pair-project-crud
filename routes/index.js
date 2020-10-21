const router = require('express').Router();
const mainRoutes = require('./main.js');
const customerRoutes = require('./customers.js');


router.use('/computer-panel', mainRoutes)
router.use('/customers', customerRoutes)


module.exports = router