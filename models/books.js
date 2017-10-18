const mongooose = require('mongoose');
const schema = mongoose.Schema();

const newBooks = new schema({
	Title: String,
	Author: String,
	Edition: String,
	Summary: String,
})

const Books = mongoose.model('Books', newBooks);

module.exports = Books;