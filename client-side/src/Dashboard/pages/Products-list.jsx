import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    // Fetch list of products from backend
    const getProductList = async () => {
        try {
            const list = await axios.get('http://localhost:6003/products-list'); // Update the API URL
            setProducts(list.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Delete product by ID
    const handleDelete = async (id) => {
        console.log(id)
        try {
            const del = await axios.delete(`http://localhost:6003/delete-product/${id}`);
            toast.warning(del.data.msg);
            getProductList(); // Refresh the product list
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className="container-fluid">
            {/* Products Table */}
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Products List</h5>
                    <NavLink to="/admin/add-products" className="btn btn-outline-success btn-sm">
                        Add New Product
                    </NavLink>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>${product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <Link to={`/admin/edit-product/${product._id}`} className="badge bg-warning">
                                                Edit
                                            </Link>
                                            {' | '}
                                            <div onClick={() => handleDelete(product._id)} className="badge bg-danger">
                                                Delete
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
