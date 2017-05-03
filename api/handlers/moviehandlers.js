var {MovieByNameDao,MovieCloneDao} = require('../daos/moviedao');
var RequestHelper = require('../helpers/request');

var movieByName = function (req,res) {
  MovieByNameDao(req.params.title)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
};


var cloneOmdb = function (req,res) {
  MovieCloneDao(req.params.char)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  // .catch(err => res.send(RequestHelper(false)))
  .catch(err => console.log(err))
};

module.exports = {movieByName,cloneOmdb};
