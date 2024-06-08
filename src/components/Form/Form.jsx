import { useState } from "react";
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
  }
  return (
    <div className="stockManagement">
      <form onSubmit={handleSubmit}>
        <h2>Stock Management</h2>
        {/* <input
          type="text"
          name="idInput"
          placeholder="Enter ID"
          value={idInput}
          onChange={handleIdInput}
        ></input> */}
        <input
          placeholder="Enter Title"
          type="text"
          name="titleInput"
          value={title}
          onChange={handleTitleInput}
        />
        <input
          placeholder="Enter Description"
          type="text"
          name="descriptionInput"
          value={description}
          onChange={handleDescriptionInput}
        />
        <input
          placeholder="Set Price"
          type="text"
          name="priceInput"
          value={price}
          onChange={handlePriceInput}
        />
        <input
          placeholder="Set Discount %"
          type="text"
          name="discountPercentageInput"
          value={discountPercentage}
          onChange={handleDiscountPercentageInput}
        />
        <input
          type="text"
          name="stockInput"
          placeholder="Enter Stock"
          value={stock}
          onChange={handleStockInput}
        />
        <input
          type="text"
          name="brandInput"
          placeholder="Enter Brand"
          value={brand}
          onChange={handleBrandInput}
        />
        <input
          type="text"
          name="categoryInput"
          placeholder=""
          value={category}
          onChange={handleCategoryInput}
        />
        <input
          placeholder="Enter url"
          type="text"
          name="thumbnailInput"
          value={thumbnail}
          onChange={handleThumbnailInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
