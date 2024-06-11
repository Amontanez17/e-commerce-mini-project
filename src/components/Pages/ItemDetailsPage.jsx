import { useParams } from "react-router-dom";
import "./itemDetails.css";

function ItemDetailsPage({ products }) {
  const { itemId } = useParams();
  console.log(products);
  console.log(itemId);
  const item = products.find((item) => item.id === Number(itemId));

  return (
    <div className="item-details-container">
      <div className="item-image">
        <img src={item.images[0]} alt="" />
      </div>
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>
          <strong>Category: </strong>
          {item.category}
        </p>
        <p>
          <strong>Brand: </strong> {item.brand}
        </p>
        <p>
          <strong>Rating: </strong>
          {item.rating}
        </p>
        <p>
          <strong>Price: </strong>
          {item.price} €
        </p>
        <p>
          <strong>Discount: </strong>
          {item.discountpercentage} %
        </p>
        <p>
          <strong>Stock: </strong>
          {item.stock}
        </p>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
