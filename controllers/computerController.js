class Controller {
    static showComputers(req, res){
        res.render('computers')
    }
    static addPost(req, res){
        res.send(req.body);
    }
}

module.exports = Controller