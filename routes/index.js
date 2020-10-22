const router = require('express').Router();
const mainRoutes = require('./computers.js');
const customerRoutes = require('./customers.js');

router.get('/', (req, res) => {
    res.redirect('/computers')
})
router.use('/computers', mainRoutes)
router.use('/customers', customerRoutes)


module.exports = router