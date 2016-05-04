var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user_id: Number,
    user_name: String,
    user_details: String
});

mongoose.model('Users', userSchema);