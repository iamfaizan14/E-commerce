import express from 'express';
const router=express.Router()

//ROUTES
//CREATE-PRODUCTS ROUTE
router.post("/create-product",createProductController)

export default router