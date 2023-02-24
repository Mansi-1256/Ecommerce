import express, { Router } from "express";
import { signup, signin, getuser, updateuser, deleteuser } from "../controller/UserController.js";
const router = express.Router();


router.post('/signup', signup)
router.post('/signin', signin)
router.get('/getuser', getuser)
router.patch('/:_id', updateuser)
router.delete('/:_id', deleteuser)

export default router;