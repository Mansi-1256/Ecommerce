import express, { Router } from "express";
import { getorder, createorder, deleteorder, updateorder } from "../controller/OrderController.js";
const router = express.Router();

router.get('/getorder/:userId', getorder)
router.post('/createorder', createorder)
router.put('/updateorder/:_id', updateorder)
router.delete('/:_id', deleteorder)

export default router;