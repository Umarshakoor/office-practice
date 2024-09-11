import { useParams } from "react-router-dom";
import Data from "./ecommerce-cards.json";

function ProductPage() {
  const { id } = useParams();
  const product = Data.products.find((item) => item.id === parseInt(id));

  console.log("product page line 9", product);
  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Date Added: {product.dateAdded}</p>
      <p>State: {product.state}</p>
      <p>On Sale: {product.onSale ? "Yes" : "No"}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductPage;
