import React from "react";
import "./ProductDetails.css";
import brick from "../assets/brick.svg";
import cement from "../assets/cement.svg";
import pipe from "../assets/pipe.svg";
import sand from "../assets/sand.svg";
import steel from "../assets/steel.svg";
import wood from "../assets/wood.svg";
import dots from "../assets/dots.svg";
function ProductDetails() {
  return (
    <div>
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <ul className="dashboard-ul">
            <li className="option-li">Home</li>
            <li className="option-li">
              Deadlines <span className="rotate-arrow">^</span>
            </li>
            <li className="option-li" style={{ color: "rgb(15, 97, 174)" }}>
              Project <span className="rotate-arrow">^</span>
            </li>
            <li className="option-li">Request</li>
            <li className="option-li">
              Activities <div className="rotate-arrow">^</div>
            </li>
            <li className="option-li">
              Material <span className="rotate-arrow">^</span>
            </li>
            <li className="option-li">
              Payment <span className="rotate-arrow">^</span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="two-columns">
          <div className="first-column">
            <div className="first-column-heading">
              <h4 className="products-heading">Products</h4>
            </div>
            <div className="first-column-content">
              <div className="products-card">
                <img className="first-column-img" src={sand} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Sand</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={cement} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Cement</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={pipe} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Pipe</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={steel} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Steel</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={brick} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Brick</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={wood} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Wood</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={sand} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Sand</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
              <div className="products-card">
                <img className="first-column-img" src={cement} alt="sand" />
                <div className="product-quality-dots">
                  <div className="product-quality-div">
                    <h4 className="product-name">Cement</h4>
                    <h4 className="product-quality">Premium Quality</h4>
                  </div>
                  <div className="three-dots-div">
                    <img
                      className="product-dots"
                      src={dots}
                      alt="more option"
                    />
                  </div>
                </div>
              </div>
              <div className="first-column-divider"></div>
            </div>
            <div className="first-column-btn-div">
              <button className="first-column-btn">Add Builder</button>
            </div>
          </div>
          <div className="second-column">
            <div className="second-column-heading">
              <h4>Product details</h4>
            </div>
            <div className="second-column-image">
              <img className="second-column-image-brick" src={brick} alt="" />
            </div>
            <div className="label-input">
              <label className="label-text" htmlFor="">
                Product Name
              </label>
              <input className="form-input" type="text" placeholder="Bricks" />
            </div>
            <div className="label-input">
              <label className="label-text" htmlFor="">
                Company Name
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="ABC Company"
              />
            </div>
            <div className="label-input">
              <label className="label-text" htmlFor="">
                Quality
              </label>
              <input className="form-input" type="text" placeholder="Premium" />
            </div>
            <div className="label-input">
              <label
                className="label-text instock"
                style={{
                  position: "relative",
                }}
                data-domain="(instock)"
                htmlFor=""
              >
                Quantity
              </label>
              <input className="form-input" type="text" placeholder="100k" />
            </div>
            <div className="label-input">
              <label
                className="label-text perprice"
                data-domain="Per Price"
                style={{
                  position: "relative",
                }}
                htmlFor=""
              >
                Price
              </label>
              <input className="form-input" type="text" placeholder="10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
