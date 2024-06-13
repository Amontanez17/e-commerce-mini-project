import ListItem from "../../components/List Item/ListItem.jsx";
import { useState } from "react";
import "./List.css";

function List({ products, setProducts }) {
  const handleDelete = (id) => {
    const updatedList = products.filter((item) => item.id !== id);
    setProducts(updatedList);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
<div>
      
      <div className="table-container">
      <div className="table-header">
         <p>Inventory</p> 
         <input
            type="text"
            placeholder="    Search Title"
            value={searchTerm}
            onChange={handleSearchInput}
            className="search-input"
          />
          
        </div>
        <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th><img src="../src/assets/factures.svg"></img></th>
              <th>Product</th>
              <th>Description</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Rating</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <ListItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default List;
