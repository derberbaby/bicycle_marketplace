// require mongoose
let mongoose = require('mongoose');
// import models
let Bicycle = mongoose.model('Bicycle');
let User = mongoose.model('User');
// exporting and importing this logic into routes
module.exports = {

getall: (req, res) => {
	Bicycle.find({}, (err, data) => {
		if(err) {
			let errors = [];
			for(let i in err.errors){
				errors.push(err.errors[i].message);
			}
			return res.status(400).send(errors);
		}
		else{
			return res.json(data);
		}
	})
},

create: (req, res) => {
	if(req.session.user_id) {
  		User.findOne({_id: req.session.user_id}, (err, user) => {
  			if(err) {
  				// console.log("ERROR FINDING USER");
  				let errors = [];
  				for(let i in err.errors){
  					errors.push(err.errors[i].message);
  				}
  				return res.status(400).send(errors);
  			}
  			else {
  				let bike = new Bicycle(req.body);
  				bike._User = user._id;
  				bike.save( (err) => {
  					if(err) {
  						// console.log("BIKE NOT SAVED");
  						let errors=[];
  						for(let i in err.errors) {
  							errors.push(err.errors[i].message);
  						}
  						return res.status(400).send(errors);
  					}
  					else {
  						// console.log("SUCCESSFULLY SAVED BIKE", bike);
  						user.bicycles.push(bike);
  						user.save( (err) => {
  							if(err) {
  								// console.log("ERROR SAVING BIKE TO USER", err);
  								let errors = [];
  								for(let i in err.errors) {
  									errors.push(err.errors[i].message);
  								}
  								return res.status(400).send(errors);
  							}
  							else {
  								// console.log("SUCCESSFULLY SAVED BIKE TO USER", user);
  								return res.json(true);
  							}
  						})
  					}
  				})

  			}
  	})
	}
},

user_bikes: (req, res) => {
	if(req.session.user_id) {
		// console.log('user', req.session.user_id);
		User.findOne({_id: req.session.user_id}).populate('bicycles').exec((err, bikes) => {
		// Bicycle.find({_User: req.session.user_id}, (err, bikes) => {
			if(err) {
				// console.log("ERROR FINDING USER bikes")
				let errors = [];
				for(let i in err.errors) {
					errors.push(err.errors[i].message);
				}
				return res.status(400).send(errors);
			}
			else {
				// console.log("POPULATE?", bikes.bicycles);
				return res.json(bikes.bicycles);
			}
		})
	}
},

update: (req, res) => {
	Bicycle.findOneAndUpdate({_id: req.params.bike_id}, req.body, (err, bike) => {
		if(err) {
			let errors = [];
			for(let i in err.errors) {
				errors.push(err.errors[i].message);
			}
			return res.status(400).send(errors);
		}
		else {
			return res.json(true);
		}
	})
},

delete: (req, res) => {
	Bicycle.remove({_id: req.params.bike_id}, (err) => {
		if(err) {
			let errors = [];
			for(let i in err.errors) {
				errors.push(err.errors[i].message);
			}
			return res.status(400).send(errors);
		}
		else {
			return res.json(true);
		}
	})
}

}