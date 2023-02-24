import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productCode: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
    },
    size: {
        type: String
    },
    description: {
        type: String,

    },
    price: {
        type: Number,
    }
})

export default mongoose.model("product", productSchema)