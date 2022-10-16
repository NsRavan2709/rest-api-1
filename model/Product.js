
// import statements
const mongoose = require('mongoose');

// Create a new Mongoose schema
const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_weight: {
        type: Number,
        required: true,
    }

})

// creating a new instance with mongoose configuratiom
const model = mongoose.model('products', productSchema);


// export the model
module.exports = model;











