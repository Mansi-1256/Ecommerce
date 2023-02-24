import express, { Router } from "express";
import { getcarts, createcart, updatecart, deletecart } from "../controller/CartController.js";
const router = express.Router();

router.get('/getcarts', getcarts)
router.post('/createcart', createcart)
router.put('/updatecart/:_id', updatecart)
router.delete('/deletecart/:_id', deletecart)

export default router;