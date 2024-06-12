import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const FetchFort = () => {
  const [url] = useState(`https://fortnite-api.com/v2/shop/br`);
  const [shop, setShop] = useState([]);

  const fetchNite = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data.date);
      setShop(data?.data);
      //   console.log(response);
      //   console.log(data);
      //   console.log(setShop);
      //   console.log(shop);
    } catch (error) {
      console.error("Error fetching Fortnite shop data:", error);
    }
  };

  useEffect(() => {
    fetchNite();
  }, []);

  console.log("....shop", shop);

  return (
    <>
      <List>
        {
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        }
      </List>
      <p>{shop?.date}</p>
      <img height={50} src={`${shop?.vbuckIcon}?w=248&fit=crop&auto=format`} />
      <div
        style={{
          backgroundImage: `url("https://cdn2.unrealengine.com/emeraldglass-shopbg-gray-1920x1080-5668be34808e.png")`,
        }}
      >
        <p>{shop?.featured?.name}</p>
        <ImageList sx={{ width: "100%", height: 450, overflow: "scroll" }}>
          {shop?.featured?.entries?.map((item, i) => (
            <div key={i}>
              {!item.bundle?.image ? (
                <p
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: 20,
                  }}
                >
                  image not found
                </p>
              ) : (
                <img
                  srcSet={`${item.bundle?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.bundle?.image}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              )}

              <ImageListItem key={item.img}>
                <ImageListItemBar
                  title={item.bundle?.name}
                  subtitle={<span>date: {shop?.date}</span>}
                  position="below"
                />
              </ImageListItem>

              <li>
                regularPrice: {item.regularPrice}, finalPrice: {item.finalPrice}
              </li>
              <li>
                bundle: {item.bundle?.name}, info: {item.bundle?.info}
                <br />
              </li>
            </div>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default FetchFort;
