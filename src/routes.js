const  express = require('express');
const multer = require('multer')
const multerConfig = require('./config/multer');

const birthdayController = require('./controllers/birthdayController');
const churchesController = require('./controllers/churchesController');
const userController = require('./controllers/usersController');
const adressesController = require('./controllers/adressesController');
const obreirosController = require('./controllers/obreirosController');
const adminController = require('./controllers/adminController')


const routes = express.Router()



routes.get('/user', userController.index);
routes.get('/user/active', userController.getAllUsersActive);
routes.get('/user/inactive', userController.getAllUsersInactive);
routes.get('/user/specific/:cpf', userController.selectSpecificUser);
routes.get('/user/:cpf', userController.getUserAll);
routes.get('/user/id/:id', userController.selectUserById);

routes.get('/count/users', userController.getCount);
routes.get('/count/churches', churchesController.getCount);
routes.get('/count/cities', adressesController.getCount);

routes.delete('/delete/image/:id/:key', userController.deleteImage);
routes.put('/update/image/:id/', multer(multerConfig).single("file"), userController.updateImage);

routes.get('/obreiros', obreirosController.index)
routes.get('/obreiros/:cargo', obreirosController.getUsers)

routes.get('/churches/:id', churchesController.index)

routes.get('/birthday/:mes', birthdayController.index)

routes.post('/user', userController.create);
routes.post('/user/:id', multer(multerConfig).single("file"), userController.createImage);

routes.delete('/user/:id/:key', userController.deleteUser);

routes.put('/user/:id/:key', userController.editUser);

routes.post('/admin', adminController.index )

module.exports = routes 