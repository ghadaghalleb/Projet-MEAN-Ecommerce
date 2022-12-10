const Product = require('../models/Product');


exports.getProductController = async(req, res) => {
    try {

        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {

        console.log(error);
    }
}
exports.createProduct = async(req, res) => {
    try {
        const { name, description, price, category, pictures } = req.body;
        const product = await Product.create({ name, description, price, category, pictures });
        const products = await Product.find();
        res.status(201).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
}