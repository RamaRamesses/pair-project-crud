const { Computer } = require('../models/index')

class Controller {
    static showComputers(req, res){
        Computer.findAll({order: [["id", "ASC"]]})
            .then(data => res.render('computers', {data}))
    }
    static addPost(req, res){
        let computer = {
            case_size: req.body.case_size,
            peripheral_devices: req.body.peripheral_devices,
            operating_system: req.body.operating_system
        }
        Computer.create(computer)
            .then(() => res.redirect('/computers'))
    }
}

module.exports = Controller