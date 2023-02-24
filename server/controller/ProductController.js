import Product from "../model/product.js";


export const getproducts = async (req, res) => {
    try {
        // const orders = await Order.findOne({ userId: req.params.userId })
        const products = await Product.find()
        if (!products)
            return res.status(404).json({ message: "User doesnt exist" })
        else
            return res.status(200).json({ products })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}
export const createproduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json({ message: "Product created sucessfully", saveProduct })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong" })
    }
}

export const updateproduct = async (req, res) => {
    const existing = await Product.findById(req.params._id)
    if (!existing)
        return res.status(404).json({ message: "Product does not exist" })
    else {
        try {
            const updatedproduct = await Product.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true })
            return res.status(200).json({ message: "product updates sucesfully", updatedproduct })

        } catch (error) {
            return res.status(500).json({ message: "something went wrong" })
        }
    }
}



export const deleteproduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params._id)
        console.log("product deleted sucessfully")

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}