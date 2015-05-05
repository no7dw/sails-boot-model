/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	test:function(req, res){
    var bm = require('boot-model');
    console.log('bm', bm);
    res.json(200,{});
  }
};

