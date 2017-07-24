var users = require('./../controllers/users.js');
var bicycles = require('./../controllers/bicycles.js');

module.exports = (app) => {
  app.post('/api/login', users.login);

  app.post('/api/register', users.register);

  app.get('/api/user', users.check_session_user);

  app.get('/api/logout', users.logout);

  app.get('/api/bikeowner/:bike_userid', users.bike_owner);

  app.get('/api/bikes', bicycles.getall);

  app.post('/api/create', bicycles.create);

  app.get('/api/user_bikes', bicycles.user_bikes);

  app.put('/api/update/:bike_id', bicycles.update);

  app.delete('/api/delete/:bike_id', bicycles.delete);

}