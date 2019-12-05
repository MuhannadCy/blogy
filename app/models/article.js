// Require necessary NPM packages 
const mongoose = require('mongoose')

// Define Article Schema

const commentSchema = new mongoose.Schema({
    body: {type: String, default: 'You are a great writer'}
},{timestamps:true})

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    author: {type: String, required: true},
    published: {type: Boolean, default: true},
    publishedOn: {type: Date, default: Date.now},
    comments: [commentSchema]
},{
    timestamps: true
}
);
// Compile our Model based on Schema
const Article = mongoose.model('Article', articleSchema)
const Comment = mongoose.model('Comment', commentSchema)
module.exports = {Article, Comment}