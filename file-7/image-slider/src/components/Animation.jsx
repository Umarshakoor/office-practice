import { Menu } from "lucide-react";
import "./animation.css";
import { useState } from "react";
function Animation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleSecondMenu = () => {
    setIsOpen(!isOpen);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 1",
      discount: "10% off",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 2",
      discount: "20% off",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 3",
      discount: "15% off",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 4",
      discount: "25% off",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 5",
      discount: "30% off",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Menu Item 6",
      discount: "5% off",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < cards.length - 4) {
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
      <div>
        <nav className="navbar">
          <div className="navbar-logo">Umar Xpro</div>
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#help">Help</a>
          </div>
          <div className="navbar-toggle" onClick={toggleSecondMenu}>
            &#9776;
          </div>
        </nav>
      </div>
      <div>
        <nav>
          <div className="logo">
            <h1>XPro</h1>
          </div>
          <ul
            id="menuList"
            style={{
              maxHeight: isMenuOpen ? "300px" : "0px",
            }}
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="menu-icon">
            <Menu onClick={toggleMenu} />
          </div>
        </nav>
      </div>
      <div className="h2-div-creative">
        <h2 className="h2-text-creative" data-text="Creative...">
          Creative...
        </h2>
      </div>
      <div>
        <div className="card-slider">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div
            className="card-container"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <img src={card.image} alt={card.name} />
                <div className="card-content">
                  <h3>{card.name}</h3>
                  <p>{card.discount}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animation;
