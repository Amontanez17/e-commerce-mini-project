import { useState} from "react";
import { useNavigate } from "react-router-dom"
import "./Form.css"

function Form({ setProducts }) {
  //   const [id, setIdInput] = useState("");
  const [title, setTitleInput] = useState("");
  const [description, setDescriptionInput] = useState("");
  const [price, setPriceInput] = useState("");
  const [discountPercentage, setDiscountPercentageInput] = useState("");
  const [stock, setStockInput] = useState("");
  const [brand, setBrandInput] = useState("");
  const [category, setCategoryInput] = useState("");
  const [thumbnail, setThumbnailInput] = useState("");
  const navigate = useNavigate();
  //   function handleIdInput(event) {
  //     setIdInput(event.currentTarget.value);
  //   }

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
        />
        <p>Category</p>
        <input
          type="text"
          name="categoryInput"
          placeholder="Item Category"
          value={category}
          onChange={handleCategoryInput}
        />
        <p>Brand</p>
          <input
            type="text"
            name="brandInput"
            placeholder="Brand Name"
            value={brand}
            onChange={handleBrandInput}
          /> 
        <p>Price</p>
          <input
          placeholder="Price"
          type="text"
          name="priceInput"
          value={price}
          onChange={handlePriceInput}
        />
        <p>Discount</p>
        <input
          placeholder="Discount"
          type="text"
          name="discountPercentageInput"
          value={discountPercentage}
          onChange={handleDiscountPercentageInput}
        />
        <p>Stock</p>
        <input
          type="text"
          name="stockInput"
          placeholder="Stock Quantity"
          value={stock}
          onChange={handleStockInput}
        />
        <p>Thumbnail</p>
         <input
          placeholder="Thumbnail URL"
          type="text"
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
        />
       
        
        
       
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    

  );
}

export default Form;
