const BookdetailURL = require('./db.config')
const mongoose = require('mongoose')


const BookDetails = {};
BookDetails.mongoose = mongoose;
BookDetails.url = BookdetailURL.url;
BookDetails.books = require('./bookdetails.model')(mongoose);
module.exports = BookDetails;