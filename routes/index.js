const router = require('express').Router();
const mainRoutes = require('./main.js');
const customerRoutes = require('./customers.js');

router.get('/', (req, res) => {
    res.redirect('/computer-panel')
})
router.use('/computer-panel', mainRoutes)
router.use('/customers', customerRoutes)


module.exports = router