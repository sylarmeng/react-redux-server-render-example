/**
 * { product schema }
 * @author     (sylar_2000@163.com)
 * @type       {schema}
 */
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({
	id : {type: Number, required: true, index: true,
	unique: true},
	owner: {type: Schema.ObjectId, ref: 'User'},
	title : {type: String, required: true},
	price: {type: Number, required: true},

	stock: {type: Number, required: true, default: 0},
	salesVolume: {type: Number, required: true, default: 0},
	shelflife: {type: String, enum: ['onsale','offsale'], required: true, default: 'offsale'}, //onsale offsale
	category: {type: String},
	discount: {type: Number, required: true, default: 1},
	pv: {type: Number, default: 0},

	orderCode: {type: String},
	manufacturer: {type: String, required: true},
	manuDate: {type: String, required: true}, //formatted date
	createTime : Date,
	updateTime : Date,

	// descrption: { type: Schema.ObjectId, ref: 'Description', required: true},
	sampleImage: {type: String, required: true},
	description: {type: String, required: true},
	comments : {type: Schema.ObjectId, ref: 'Comments'}
});

var Product = mongoose.model('Product',productSchema);

module.exports = {
	Product:Product
};

