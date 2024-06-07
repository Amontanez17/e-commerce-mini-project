import { useParams } from "react-router-dom";

function ItemDetailsPage({ products }) {
  const { itemId } = useParams();
  console.log(products);
  console.log(itemId);
  const item = products.find((item) => item.id === Number(itemId));

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.brand}</p>
      <p>{item.rating}</p>
      <p>{item.thumbnail}</p>
      <p>{item.price}</p>
      <p>{item.discountpercentage}</p>
      <p>{item.description}</p>
      <p>{item.stock}</p>
      <p>{item.category}</p>
    </div>
  );
}

export default ItemDetailsPage;
