import "./main.css";
import salad1 from "../../assets/salad1.svg";
import salad2 from "../../assets/salad2.svg";
import salad3 from "../../assets/salad3.svg";
import salad4 from "../../assets/salad4.svg";
import location from "../../assets/location.svg";
import ring from "../../assets/ring.svg";
import meal from "../../assets/meal.svg";
import pay from "../../assets/pay.svg";
import burger from "../../assets/burger.svg";
import toffecake from "../../assets/toffecake.svg";
import dancake from "../../assets/dancake.svg";
import sandwitch from "../../assets/sandwitch.svg";
import soup from "../../assets/soup.svg";
import { useState } from "react";
import { LocationOn } from "@mui/icons-material";

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: burger,
      name: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
    },
    {
      image: toffecake,
      name: "Toffes Cake",
      location: "Top Sticks",
      price: "$4.00",
    },
    {
      image: dancake,
      name: "dancake",
      location: "Cake World",
      price: "$1.99",
    },
    {
      image: sandwitch,
      name: "Crispy Sandwitch",
      location: "fastfood Dine",
      price: "$3.00",
    },
    {
      image: soup,
      name: "Thai Soup",
      location: "Food man",
      price: "$2.79",
    },
    {
      image: burger,
      name: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
    },
    {
      image: dancake,
      name: "dancake",
      location: "Cake World",
      price: "$1.99",
    },
    {
      image: sandwitch,
      name: "Crispy Sandwitch",
      location: "fastfood Dine",
      price: "$3.00",
    },
    {
      image: soup,
      name: "Thai Soup",
      location: "Food man",
      price: "$2.79",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < cards.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <main>
        <section className="off-cards">
          <div className="card-span">
            <div className="position-relative">
              <img className="off-card-img" src={salad1} alt="" />
              <div className="card-action">
                <div className="text-badge">
                  <div className="off-text">20</div>
                  <div className="perc-off-text">
                    <div className="off-perc">%</div>
                    <div className="off-written">Off</div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-under-card">Greys Vage</h4>
            <button className="btn-under-card">8 Days Remaining</button>
          </div>
          <div className="card-span">
            <div className="position-relative">
              <img className="off-card-img" src={salad2} alt="" />
              <div className="card-action">
                <div className="text-badge">
                  <div className="off-text">15</div>
                  <div className="perc-off-text">
                    <div className="off-perc">%</div>
                    <div className="off-written">Off</div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-under-card">Greys Vage</h4>
            <button className="btn-under-card">6 Days Remaining</button>
          </div>
          <div className="card-span">
            <div className="position-relative">
              <img className="off-card-img" src={salad3} alt="" />
              <div className="card-action">
                <div className="text-badge">
                  <div className="off-text">10</div>
                  <div className="perc-off-text">
                    <div className="off-perc">%</div>
                    <div className="off-written">Off</div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-under-card">Greys Vage</h4>
            <button className="btn-under-card">6 Days Remaining</button>
          </div>
          <div className="card-span">
            <div className="position-relative">
              <img className="off-card-img" src={salad4} alt="" />
              <div className="card-action">
                <div className="text-badge">
                  <div className="off-text">25</div>
                  <div className="perc-off-text">
                    <div className="off-perc">%</div>
                    <div className="off-written">Off</div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-under-card">Greys Vage</h4>
            <button className="btn-under-card">7 Days Remaining</button>
          </div>
        </section>
        <section className="how-does-its-work">
          <div className="work-main-heading">
            <h2 className="work-main-text">How Does it Work</h2>
          </div>
          <div className="work-card-div">
            <div className="work-card">
              <img className="work-card-img" src={location} alt="" />
              <h4 className="work-card-first-text">Select location</h4>
              <h4 className="work-card-second-text">
                Choose the location where your food will be delivered.
              </h4>
            </div>
            <div className="work-card">
              <img className="work-card-img" src={ring} alt="" />
              <h4 className="work-card-first-text">Choose order</h4>
              <h4 className="work-card-second-text">
                Check over hundreds of menus to pick your favorite food
              </h4>
            </div>
            <div className="work-card">
              <img className="work-card-img" src={pay} alt="" />
              <h4 className="work-card-first-text">Pay advanced</h4>
              <h4 className="work-card-second-text">
                Its quick, safe, and simple. Select several methods of payment
              </h4>
            </div>
            <div className="work-card">
              <img className="work-card-img" src={meal} alt="" />
              <h4 className="work-card-first-text">Enjoy meals</h4>
              <h4 className="work-card-second-text">
                Food is made and delivered directly to your home.
              </h4>
            </div>
          </div>
        </section>
        <section className="popular-items">
          <div>
            <h4 className="popular-text">Popular items</h4>
          </div>
          <div className="div-btn-items">
            <button className="prev" onClick={prevSlide}>
              &#10094;
            </button>

            <div className="card-slider">
              <div
                className="card-container"
                style={{ transform: `translateX(-${currentIndex * 11}%)` }}
              >
                {cards.map((card, index) => (
                  <div className="card" key={index}>
                    <img src={card.image} alt={card.name} />
                    <div className="card-content">
                      <h3 className="slider-name">{card.name}</h3>
                      <p className="p-icon-location">
                        <LocationOn />
                        {card.location}
                      </p>
                      <p className="card-price">{card.price}</p>
                    </div>
                    <div>
                      <button className="order-now-btn">Order Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
