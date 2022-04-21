let productsSchema = mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{
    feature: String,
    value: String
  }],
  styles: [{
    style_id: Number,
    name: String,
    original_price: String,
    sale_price: String,
    default: Boolean,
    photos: [{
      thumbnail: String,
      url: String
    }],
    skus: [{
      sku_id: {
        quantity: Number,
        size: String
      }
    }]
  }],
  related: [{
    id: Number
  }]
});