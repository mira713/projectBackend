const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: String,
    brand: String,
    name: String,
    description: String,
    img_url_1: String,
    img_url_2: String,
    img_url_3: String,
    item_category: String,
    complexion_format: String,
    complexion_coverage: String,
    makeup_category: String,
    rating: Number,
    review_count: Number,
    mrp: Number,
    offer_price: Number,
    quantity: Number,
    discount:Number,
    gender:String,
    item_in_cart: String,
    item_like: String,
    item_stock: String,
    userId:String,
    cat:String
  },
  {
    versionKey: false,
  }
);

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel};
