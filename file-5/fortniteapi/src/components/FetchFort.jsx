import { useState, useEffect } from "react";

const FetchFort = () => {
  const [url] = useState(`https://fortnite-api.com/v2/shop/br`);
  const [shop, setShop] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setShop(data);
      console.log(response);
      console.log(data);
      console.log(setShop);
      console.log(shop);
    } catch (error) {
      console.error("Error fetching Fortnite shop data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      {shop.length && (
        <ul>
          {shop.data.data.map((item, i) => (
            <li key={i}>
              {item.date} - {item.itemDescription}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchFort;
