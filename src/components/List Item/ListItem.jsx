import { Link } from "react-router-dom";
import "./ListItem.css"
function ListItem({ item, handleDelete }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
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
    <tr className="list-item">
      <td><Link to={`/item/${item.id}`} ><img className="thumbnail" src={thumbnail} alt="item thumbnail" /> </Link></td>
        
      <td><Link to={`/item/${item.id}`} >{title}</Link></td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{brand}</td>
      <td>{price}
        </td>
      <td>
        {discountPercentage}%
      </td>
      <td>{rating}</td>
      <td>{stock}{stock <= 50 ? <span className="deal">Low</span> : null} </td>
      <td><button className="delete-button" onClick={handleDeleteClick}>Delete</button></td>
    </tr>
     
  );
}

export default ListItem;
