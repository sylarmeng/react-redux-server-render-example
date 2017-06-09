/**
 * { product schema }
 * @author     (sylar_2000@163.com)
 * @type       {schema}
 */
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var dishSchema = new Schema({
	id : {type: Number, required: true, index: true,
	unique: true},
	owner: {type: Schema.ObjectId, ref: 'User'},
	title : {type: String, required: true},
	price: {type: Number, required: true},

	salesVolume: {type: Number, default: 0},
	Status: {type: String, enum: ['onsale','offsale'], required: true, default: 'offsale'}, //onsale offsale
	category: {type: String},
	discount: {type: Number, required: true, default: 1},
	pv: {type: Number, default: 0},

	createTime : Date,
	updateTime : Date,
	// descrption: { type: Schema.ObjectId, ref: 'Description', required: true},
	sampleImage: {type: String},
	description: {type: String},
	comments : {type: Schema.ObjectId, ref: 'Comments'}
});

var Dish = mongoose.model('Dish',dishSchema);

module.exports = {
	Dish:Dish
};

