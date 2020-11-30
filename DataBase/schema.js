const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: String,
  overview: String,
  poster_path: String,
  release_date: String,
  matched: {
    type: Boolean,
    default: false,
  },
  watched: {
    type: Boolean,
    default: false,
  },
});
const MovieModel = mongoose.model('Movie', MovieSchema);
const UserModel = mongoose.model('User', new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
  },
  password: String,
  movies: [MovieSchema],
}));

module.exports.User = UserModel;
module.exports.Movie = MovieModel;
