var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes_db', {useNewUrlParser: true});
var RatingSchema = new mongoose.Schema({
    score: { type: Number, required: [true], min: [1, "Rating too low"], max: [5, "Rating too high"]},
    comment: { type: String, default: ""}
}, { timestamps: true });
var CakeSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], minlength: [2, "Name must be at least 2 characters long"]},
    description: { type: String, default: "" },
    baker: { type: String, required: [true, "Baker name is required"], minlength: [2, "Baker name must be at least 2 characters long"]},
    img_url: { type: String, required: [true, "Image URL is required"]},
    ratings: [RatingSchema]
}, { timestamps: true });

module.exports = { Cake: mongoose.model('Cake', CakeSchema) };