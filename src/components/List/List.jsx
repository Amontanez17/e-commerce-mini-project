import ListItem from "../../components/List Item/ListItem.jsx";
import "./List.css";

function List({ products, setProducts }) {
  const handleDelete = (id) => {
    const updatedList = products.filter((item) => item.id !== id);
    setProducts(updatedList);
  };

  return (
    <div>
      <div id="products-container">
        {products.map((item) => (
          <ListItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default List;
