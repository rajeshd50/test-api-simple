var mongoose = require('mongoose');
var User = mongoose.model('Users');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.userGet = function (req, res) {
	// body...
	User.find()
	.exec(function(err, data) {
		// body...
		sendJSONresponse(res, 200, data);
	});
}
module.exports.userSingleGet = function (req, res) {
	// body...
	if (req.params && req.params.userid) {
		User.find({"user_id":req.params.userid})
		.exec(function(err, data) {
			// body...
			sendJSONresponse(res, 200, data);
		});
	}else {
		sendJSONresponse(res, 404, {
	      "message": "No userid in request"
	    });
	}
}

module.exports.userAddNew = function (req, res) {
	console.log(req.body);
	User.find({})
	.sort({"user_id":-1})
	.limit(1)
	.exec(function(err,data){
		User.create({
			"user_id": (data[0].user_id+1),
			"user_name": req.body.name,
			"user_details": req.body.details||''
		},function(err,data){
			if(err) {
				sendJSONresponse(res, 400, err);
			}else {
				sendJSONresponse(res, 201, data);
			}
		})
	});
}