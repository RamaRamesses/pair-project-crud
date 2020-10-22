const router = require('express').Router();
const Controller = require('../controllers/computerController')

router.get('/', Controller.showComputers)
router.post('/', Controller.addPost)

module.exports = router