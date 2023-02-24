import Order from "../model/Order.js";

export const getorder = async (req, res) => {
    try {
        const orders = await Order.findOne({ userId: req.params.userId })
        // const orders = await Order.find()
        if (!orders)
            return res.status(404).json({ message: "User doesnt exist" })
        else
            return res.status(200).json({ orders })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}

export const createorder = async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const saveOrder = await newOrder.save();
        res.status(200).json({ message: "Order created sucessfully", saveOrder })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}
export const updateorder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true })
        return res.status(200).json({ message: "order updated sucessfully", updatedOrder })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}




export const deleteorder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params._id)
        console.log("order deleted sucessfully")

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}