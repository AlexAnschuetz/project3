var mongoose = require('mongoose')
	User = require("./user");

var postSchema = new mongoose.Schema( {
	title: String,
	description: String,
	location: String,
	user: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

var Post = mongoose.model('Post', postSchema);

module.exports = Post    