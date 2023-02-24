import countries, { getCountryByName } from 'node-countries';
import User from '../model/user.js'

export const signup = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user)
            return res.status(400).json({ message: "User already exist" });;
        if (password === !confirmpassword)
            return res.status(400).json({ message: "password do not match" })
        const result = await User.create({ name, email, password });
        console.log('user', result)
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })

    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User already exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const getuser = async (req, res) => {
    const { email } = req.body
    try {
        const getuser = await User.find()
        return res.status(200).json({ getuser })
    } catch (error) {
        console.log(error)
    }
}

export const updateuser = async (req, res) => {
    const { _id } = req.params;
    try {
        const updateuser = await User.findByIdAndUpdate({ _id }, { $set: req.body }, { new: true })
        // return res.status(200).json({ updateuser })
        console.log(updateuser)
    } catch (error) {
        console.log(error)

    }
}

export const deleteuser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params._id)
        console.log("user deleted sucessfully")

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}