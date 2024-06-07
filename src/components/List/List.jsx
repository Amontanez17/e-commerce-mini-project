
import ListItem from "../../components/List Item/ListItem.jsx";
import Form from "../Form/Form.jsx";

function List({products, setProducts}) {

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
