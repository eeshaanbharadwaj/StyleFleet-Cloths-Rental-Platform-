import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			min: 0,
			required: true,
		},
		image: {
			type: String,
			required: [true, "Image is required"],
		},
		category: {
			type: String,
			required: true,
		},
		isFeatured: {
			type: Boolean,
			default: false,
		},
		isRentable: {
			type: Boolean,
			default: false,
		},
		rentalPrice: {
			type: Number,
			min: 0,
		},
		rentalPeriodOptions: {
			type: [String], // e.g., ['1 day', '1 week', '1 month']
			default: [],
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
