import { useState} from "react";
import { useNavigate } from "react-router-dom"
import "./Form.css"

function Form({ setProducts }) {
  const [title, setTitleInput] = useState("");
  const [description, setDescriptionInput] = useState("");
  const [price, setPriceInput] = useState("");
  const [discountPercentage, setDiscountPercentageInput] = useState("");
  const [stock, setStockInput] = useState("");
  const [brand, setBrandInput] = useState("");
  const [category, setCategoryInput] = useState("");
  const [thumbnail, setThumbnailInput] = useState("");
  const navigate = useNavigate();
 

  function handleTitleInput(event) {
    setTitleInput(event.currentTarget.value);
  }

  function handleDescriptionInput(event) {
    setDescriptionInput(event.currentTarget.value);
  }
  function handlePriceInput(event) {
    setPriceInput(event.currentTarget.value);
  }

  function handleDiscountPercentageInput(event) {
    setDiscountPercentageInput(event.currentTarget.value);
  }

  function handleStockInput(event) {
    setStockInput(event.currentTarget.value);
  }

  function handleBrandInput(event) {
    setBrandInput(event.currentTarget.value);
  }
  function handleCategoryInput(event) {
    setCategoryInput(event.currentTarget.value);
  }
  function handleThumbnailInput(event) {
    setThumbnailInput(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: crypto.randomUUID(),
      title,
      description,
      price,
      discountPercentage,
      stock,
      brand,
      category,
      thumbnail,
    };
    setProducts((products) => [newItem, ...products]);
    navigate('/')
  }
  return (
    <div className="stockContainer">

          
    <div className="formContainer">
      <p>Add New Item</p>
        <img src="../src/assets/Frame1650.png" alt="Squirrel" />
         </div>


    <div className="stockManagement">
     
      

      <form onSubmit={handleSubmit}>
        
      <p className="formHeader">Name</p>
        <input
          placeholder="Product Name"
          type="text"
          name="titleInput"
          value={title}
          onChange={handleTitleInput}
          required
        />
        <p>Category</p>
        <input
          type="text"
          name="categoryInput"
          placeholder="Item Category"
          value={category}
          onChange={handleCategoryInput}
          required
        />
        <p>Brand</p>
          <input
            type="text"
            name="brandInput"
            placeholder="Brand Name"
            value={brand}
            onChange={handleBrandInput}
            required
          /> 
        <p>Price</p>
          <input
          placeholder="Price"
          type="number"
          name="priceInput"
          value={price}
          onChange={handlePriceInput}
          required
        />
        <p>Discount</p>
        <input
          placeholder="Discount"
          type="number"
          name="discountPercentageInput"
          value={discountPercentage}
          onChange={handleDiscountPercentageInput}
          required
        />
        <p>Stock</p>
        <input
          type="number"
          name="stockInput"
          placeholder="Stock Quantity"
          value={stock}
          onChange={handleStockInput}
          required
        />
        <p>Thumbnail</p>
         <input
          placeholder="Thumbnail URL"
          type="url"
          name="thumbnailInput"
          value={thumbnail}
          onChange={handleThumbnailInput}
        />
        <p>Description</p>
        <input
          placeholder="Discription"
          type="text"
          name="descriptionInput"
          value={description}
          onChange={handleDescriptionInput}
          required
        />
       
        
        
       
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    

  );
}

export default Form;
