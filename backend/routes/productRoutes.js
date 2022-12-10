const router = require('express').Router();
const ProductController = require('../controllers/productController');
const Product = require('../models/Product');
router.get('/getproducts', ProductController.getProductController);
router.post('/addproducts', ProductController.createProduct);


// update product

router.patch('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const { name, description, price, category,pictures } = req.body;
        const product = await Product.findByIdAndUpdate(id, { name, description, price, category, pictures });
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
})


// delete product

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;
    try {
        const user = await User.findById(user_id);
        if (!user.isAdmin) return res.status(401).json("You don't have permission");
        await Product.findByIdAndDelete(id);
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
module.exports = router;