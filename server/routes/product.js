import express, { Router } from "express";
import { getproducts, createproduct, deleteproduct, updateproduct } from "../controller/ProductController.js";
const router = express.Router();

router.get('/getproducts', getproducts)
router.post('/createproduct', createproduct)
router.put('/updateproduct/:_id', updateproduct)
router.delete('/:_id', deleteproduct)

export default router;