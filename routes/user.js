module.exports = (app) => {
    const user = require('../controllers/userController')

    app.post('/user/create', user.create)
    app.get('/user/get', user.findAll)
    app.get('/user/getWeb', user.findAllWeb) //filtro
    app.get('/user/getOne/:id', user.findOne)
    app.put('/user/update/:id', user.update)
    app.delete('/user/delete/:id', user.delete)

}