import data from "../../assets/products.json";
import ListItem from "../../components/List Item/ListItem.jsx";
import { useState } from "react";
import Form from "../Form/Form.jsx";

function List() {
  const [products, setProducts] = useState(data);

  const handleDelete = (id) => {
    const updatedList = products.filter((item) => item.id !== id);
    setProducts(updatedList);
  };

  return (
    <div id="products-container">
      <div>
        <Form setProducts={setProducts} />
      </div>
      {products.map((item) => (
        <ListItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
