/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	test:function(req, res){
    var bm = require('boot-model');
    //console.log('bm', bm);
    bm.count(function(err, length){
        if(!err) res.json(200, {'length':length});
        else  res.json(200,{'err':err});
      });

  }
};

