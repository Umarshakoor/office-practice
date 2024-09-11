import { Link } from "react-router-dom";
import Data from "./ecommerce-cards.json";

function HomePage() {
  return (
    <>
      <h1>Product List</h1>
      <div className="card-container">
        {Data.products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>state: {product.state}</p>
            <p>category: {product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
