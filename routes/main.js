const router = require('express').Router();
const Controller = require('../controllers/computerController')

router.get('/', Controller.showComputers)

module.exports = router