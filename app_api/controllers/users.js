var mongoose = require('mongoose');
var User = mongoose.model('Users');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// Get all users
module.exports.userGet = function (req, res) {
	// body...
	User.find()
	.exec(function(err, data) {
		// body...
		sendJSONresponse(res, 200, data);
	});
}

// Get a single user
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

// Add a new user
module.exports.userAddNew = function (req, res) {
	console.log(req.body);
	User.find({})
	.sort({"user_id":-1})
	.limit(1)
	.exec(function(err,data){
		var newId = 1;
		if(data.length>0) {
			newId = data[0].user_id+1;
		}
		User.create({
			"user_id": newId,
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

// Delete a single user
module.exports.userSingleDelete = function (req, res) {
	// body...
	if (req.params && req.params.userid) {
		User.find({"user_id":req.params.userid}).remove()
		.exec(function(err, data) {
			// body...
			sendJSONresponse(res, 200, {message:'Deleted'});
		});
	}else {
		sendJSONresponse(res, 404, {
	      "message": "No userid in request"
	    });
	}
}


// Edit a single user
module.exports.userSingleEdit = function (req, res) {

}