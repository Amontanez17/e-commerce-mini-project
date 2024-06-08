import { Link } from "react-router-dom";
import "./ListItem.css"
function ListItem({ item, handleDelete }) {
  const {
    id,
    title,
    description,
    price,
    discountpercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = item;


  const handleDeleteClick = (event) => {
    // event.stopPropagation();
    event.preventDefault();
    handleDelete(id); 
  };


  return (
    <Link to={`/item/${item.id}`} >
      <div className="list-item">
        List Item
        <li key={id}>
          <h2>{title}</h2>
          
          <p className="description">Description: {description}</p>
          <p>Price: {price} €</p>
          <p>Discount:{discountpercentage} % off</p>
          <p>Rating: {rating}</p>
          <p>Stock: {stock}</p>
          <p>Brand: {brand}</p>
          <p>Category: {category}</p>
          <img className="thumbnail" src={thumbnail} alt="item thumbnail" />
          <button onClick={handleDeleteClick}>Delete</button>
          {price <= 500 && <span className="deal">Deal</span>}
        </li>
      </div>
    </Link>
  );
}

export default ListItem;
