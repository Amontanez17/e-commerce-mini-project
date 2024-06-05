import Products from "../../assets/products.json";
import ListItem from "../../components/List Item/ListItem.jsx";
import { useState } from "react";

function List() {
  const [mobilePhone, setmobilePhone] = useState(Products);

  const handleDelete = (id) => {
    const updatedList = mobilePhone.filter((item) => item.id !== id);
    setmobilePhone(updatedList);
  };

  return (
    <div id="products-container">
      {mobilePhone.map((item) => (
        <ListItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
