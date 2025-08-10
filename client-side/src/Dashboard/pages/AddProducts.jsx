import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // For toast notifications
import { Link } from 'react-router-dom';

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API to add the product
      const res = await axios.post('http://localhost:6003/add-products', product);

      // Show success message
      console.log(res.data);
      toast.success('Product added successfully!');

      // Clear form after submission
      setProduct({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
      });
    } catch (error) {
      // Handle errors
      console.error(error);
      toast.error('Failed to add product.');
    }
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Add Products</div>
            <div className="card-body">

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Product Name */}
                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={product.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      value={product.category}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={product.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Stock */}
                  <div className="mb-3">
                    <label className="form-label">Stock Quantity</label>
                    <input
                      type="number"
                      name="stock"
                      className="form-control"
                      value={product.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      value={product.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                     <div className="text-end">
                    <Link to='/admin/user-list' className="btn btn-sm btn-outline-danger ">
                      Cancel
                    </Link>
                    <span className='px-2'></span>
                    <button type="submit" className="btn btn-sm btn-outline-success ">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
