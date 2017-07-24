let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BicycleSchema = new mongoose.Schema({
  title: {type: String, required: [true, "title required"]},
  desc: {type: String, required: [true, "description required"], maxlength: "200"},
  price: {type: String, required: [true, "price required"]},
  location: {type: String, required: [true, "location required"]},
  image: {type: String, required: [true, "image required"]},
  _User: {type: Schema.Types.ObjectId, ref: 'User' }
}, {timestampes: true});

let Bicycle = mongoose.model('Bicycle', BicycleSchema);

