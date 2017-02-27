var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
  title: { type: String },
  created_at: { type: Date, default: Date.now},
  image: { type: String }
});


exports.Game = mongoose.model('Game', gameSchema);
