import Cart from '../model/cart.js'

export const getcarts = async (req, res) => {
    try {
        const carts = await Cart.findOne({ userId: req.params.userId })

        return res.status(200).json({ carts })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}

export const createcart = async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const saveCart = await newCart.save();
        res.status(200).json({ message: "cart created sucessfully", newCart })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}
export const updatecart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true })
        return res.status(200).json({ message: "cart updated sucessfully", updatedCart })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}




export const deletecart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params._id)
        console.log("Cart deleted sucessfully")

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}
