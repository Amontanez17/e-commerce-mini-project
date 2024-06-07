import { Link } from "react-router-dom";

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
  return (
    <Link to={`/item/${item.id}`}>
      <div>
        List Item
        <li key={id}>
          <h3>{title}</h3>
          <p>Description: {description}</p>
          <p>Price: {price} €</p>
          <p>Discount:{discountpercentage} % off</p>
          <p>Rating: {rating}</p>
          <p>Stock: {stock}</p>
          <p>Brand: {brand}</p>
          <p>Category: {category}</p>
          <img className="thumbnail" src={thumbnail} alt="item thumbnail" />
          <button onClick={() => handleDelete(id)}>Delete</button>
          {price <= 500 && <span>Deal</span>}
        </li>
      </div>
    </Link>
  );
}

export default ListItem;
