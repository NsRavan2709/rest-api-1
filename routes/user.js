const express = require('express');
const router = express.Router();
const model = require("../model/Product")



//  fetch all data from the server
router.get('/', async (req, res) => {
    try {
        const products = await model.find();
        res.status(201).json(products);

    } catch (error) {
        console.log("error");
    }
});

//  fetching single product data from server

router.get("/:id", async (req, res) => {
    try {
        const singleProduct = await model.findById(req.params.id);
        res.status(200).json(singleProduct);
    } catch (error) {
        res.status(500).json("Uncaught error");
    }
})

// update product data from the server

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = await model.findByIdAndUpdate(id, req.body, { new: true });
        console.log(updateProduct);
        res.status(200).json("data update successfully");
    } catch (error) {
        res.status(404).json("error");
    }
})

// Adding a new product data to the server

router.post('/', async (req, res) => {
    const { product_name, product_price, product_weight } = req.body;
    try {
        // console.log(req.body);
        const addProduct = new model({ product_name, product_price, product_weight });
        await addProduct.save();
        res.status(201).json("The data hase benn saved successfully");

    } catch (error) {
        console.error(error);
    }
})

// Deleting a product from the server

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await model.findByIdAndDelete(id);
        res.status(200).json(deleteProduct);
        console.log(deleteProduct);
    } catch (error) {
        res.status(500).json("Uncaught error");
    }
})


module.exports = router;