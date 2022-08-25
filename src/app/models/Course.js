const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
var mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

mongoose.plugin(slug)

const Course = new Schema({

  name: {type: String, required: true},
  slug: {type: String, slug:"name", unique: true},
  description: String,
  videoID: String,
  image: String, 
  level: String, 
}, {
  timestamps: true,
}

);

Course.plugin(mongooseDelete, { 
  overrideMethods: 'all', 
  deletedAt : true 
})

module.exports = mongoose.model('Course', Course);