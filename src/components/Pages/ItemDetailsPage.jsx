import { useParams, useNavigate} from "react-router-dom";
import { useState } from "react";
import "./ItemDetailsPage.css";

function ItemDetailsPage({ products,setProducts }) {
  const { itemId } = useParams();
  console.log(products);
  const navigate = useNavigate();
  console.log(itemId);
  const item = products.find((item) => item.id === Number(itemId));
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: item.title,
    description: item.description,
    category: item.category,
    brand: item.brand,
    price: item.price,
    discountPercentage: item.discountPercentage,
    rating: item.rating,
    stock: item.stock,
    thumbnail: item.thumbnail,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateClick = () => {
    setIsEditMode(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === Number(itemId) ? { ...product, ...formData } : product
    );
    setProducts(updatedProducts);
    setIsEditMode(false);
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
    <h1 className="item-details-header">Product Detail</h1>
    <div className="item-details-container">
      <img className="item-details-thumbnail" src={item.thumbnail} alt="item thumbnail" />
      <div className="item-details-content">
        {isEditMode ? (
          <div className= "updateForm">
          <form  onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="item-details-label">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Description:</label>
              <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Thumbnail URL:</label>
              <input
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Brand:</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Discount:</label>
              <input
                type="text"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Rating:</label>
              <input
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="item-details-label">Stock:</label>
              <input
                type="text"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </div>
            <div className="item-details-actions">
              <button type="submit" className="item-details-button update-button">Save</button>
              <button type="button" className="item-details-button back-button" onClick={handleGoBackClick}>Cancel</button>
            </div>
          </form> </div>
        ) : (
          <>
          <div className="itemDetailsContainter">
            <p><span className="item-details-label">Title:</span> {item.title}</p>
            <p><span className="item-details-label">Description:</span> {item.description}</p>
            <p><span className="item-details-label">Category:</span> {item.category}</p>
            <p><span className="item-details-label">Brand:</span> {item.brand}</p>
            <p><span className="item-details-label">Price:</span> {item.price} €</p>
            <p><span className="item-details-label">Discount:</span> {item.discountPercentage}%</p>
            <p><span className="item-details-label">Rating:</span> {item.rating}</p>
            <p><span className="item-details-label">Stock:</span> {item.stock}</p>
            <div className="item-details-actions">
              <button className="item-details-button update-button" onClick={handleUpdateClick}>Update</button>
              <button className="item-details-button back-button" onClick={handleGoBackClick}>Go Back</button>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);
}


export default ItemDetailsPage;
