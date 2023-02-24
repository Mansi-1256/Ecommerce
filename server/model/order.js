import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    product: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: String
            }
        }
    ],

    amount: {
        type: Number
    },
    address: {
        type: String
    },
    status: {
        type: String
    }
})

export default mongoose.model('order', orderSchema)