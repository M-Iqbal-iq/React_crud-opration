const productModel = require('../models/products_model')

// add products end point
const addProducts = async (req, res) => {
    try {
        const { name, category, price, stock, description } = req.body
        const newProduct = await new productModel({ name, category, price, stock, description });
        const saveProduct = await newProduct.save();
        console.log(saveProduct);
        res.status(200).json({ msg: "Product Added Successfully." })
    } catch (error) {
        console.log(`The Error is in Adding Product : ${error}`);
    }
}


// products List end point
const getProducts = async (req, res) => {
    try {
        const productslist = await productModel.find();
        res.json(productslist);
    } catch (error) {
        console.log(error)
    }
}

// edit Products ende point
const getProById = async (req, res) => {
    try {
        const pro = await productModel.findByIdAndUpdate(req.params.id);
        res.json(pro)
    } catch (error) {
        console.log(`Error is in geting user by id Products: ${error}`)
    }
}



// update Products ende point
const updateProduct = async (req, res) => {
    const { name, category, price, stock, description } = req.body;
    try {
        const pro = await productModel.findByIdAndUpdate(req.params.id,
            { name, category, price, stock, description }
            , { new: false })
        res.status(200).json({ msg: "Product Updated Successfully." });
    } catch (error) {
        console.log(`Error is in Updating Products: ${error}`)
    }
}


// end point for delete
const delproduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"Product is deleted successfully."})
    } catch (err) {
        console.log(err)
    }
}






module.exports = { addProducts, getProducts, getProById, updateProduct,delproduct }