// require mongoose
let mongoose = require('mongoose');
// import models
let User = mongoose.model('User');
// exporting and importing this logic into routes
let Bicycle = mongoose.model('Bicycle');

let bcrypt = require('bcryptjs');

module.exports = {

  login: (req, res) => {
    User.findOne({email: req.body.email}, (err, user_login) => {
      if(user_login == null) {
      	let errors = ["Email does not exist. Please register."];
        return res.status(400).send(errors);
      }
      else{
        if(bcrypt.compareSync(req.body.password, user_login.password)) {
          req.session.user_id = user_login._id;
          return res.json(true);
        }
        else {
          let errors = ["Incorrect password."];
          return res.status(400).send(errors);
        }
      }
    })
  },

  register: (req, res) => {
    User.findOne({email: req.body.email}, (err, foundUser) => {
      if(err) {
        let errors = [];
        for(let i in err.errors){
          errors.push(err.errors[i].message);
        }
        return res.status(400).send(errors);
      } else {
        if(foundUser == null) {
          // user does not exist in db
          let user = new User(req.body);
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
          user.save( (err, savedUser) => {
            if(err) {
              let errors = [];
              for(let i in err.errors) {
                errors.push(err.errors[i].message);
              }
              return res.status(400).send(errors);
            } else {
              req.session.user_id = savedUser._id
              return res.json(savedUser);
            }
          })
        } else {
          // email already exists in db
          let errors = ["Email already registered, please log in."];
          return res.status(400).send(errors);
        }
      }
    })
  },

  check_session_user: (req, res) => {
    if(req.session.user_id) {
      User.findOne({_id: req.session.user_id}, (err, user) => {
        if(err) {
          return res.status(400).send(err);
        }
        else{
          return res.json(user);
        }
      })
    }
    else {
      let errors = ["User not in session"];
      return res.status(400).send(errors);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.json(true);
  },

  // get_user: (req, res) => {
  //   if(req.session.user_id) {
  //     User.findOne({_id: req.session.user_id}, (err, user) => {
  //       if(err) {
  //         return res.status(400).send(err);
  //       }
  //       else{
  //         return res.json(user);
  //       }
  //     })
  //   }
  // }

  bike_owner: (req, res) => {
    User.findOne({_id: req.params.bike_userid}, (err, user) => {
      if(err) {
        return res.status(400).send(err);
      }
      else {
        return res.json(user);
      }
    })
  }

}