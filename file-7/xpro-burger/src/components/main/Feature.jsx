import "./feature.css";
import egg from "../../assets/egg.svg";
import egg1 from "../../assets/egg1.svg";
import green from "../../assets/green.svg";
import honey from "../../assets/honey.svg";
import cupcake from "../../assets/cupcake.svg";
import grill from "../../assets/grill.svg";
import grill2 from "../../assets/grill2.svg";
import tomato from "../../assets/tomato.svg";
import foodworld from "../../assets/foodworld.svg";
import pizzahub from "../../assets/pizzahub.svg";
import kfc from "../../assets/kfc.svg";
import dunkin from "../../assets/dunkin.svg";
import ruby from "../../assets/ruby.svg";
import red from "../../assets/red.svg";
import taco from "../../assets/taco.svg";
import star from "../../assets/star.svg";
import { AccessTime, Sell } from "@mui/icons-material";

function Feature() {
  return (
    <div>
      <div>
        <h2 className="featureItems">Feature Items</h2>
      </div>
      <section className="feature-cards">
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={egg} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={foodworld} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>46</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={egg1} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={pizzahub} alt="" />
            <div className="name-star-value">
              <h4>Pizza Hub</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>40</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={green} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={dunkin} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>30</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={tomato} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={kfc} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={honey} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={taco} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>46</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={cupcake} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={red} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>46</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={grill} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={ruby} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>46</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
        <div className="feature-card-span">
          <div className="feature-position-relative">
            <img className="feature-card-img" src={grill2} />
            <div className="feature-card-action">
              <div className="feature-text-badge">
                <div className="feature-off-text">
                  <Sell />
                  <span>20%</span>
                  <span>off</span>
                </div>
                <div className="feature-fast-text">
                  <AccessTime />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-img-name-star">
            <img src={foodworld} alt="" />
            <div className="name-star-value">
              <h4>Foodworld</h4>
              <div className="star-value">
                <img src={star} alt="" />
                <span>46</span>
              </div>
            </div>
          </div>
          <button className="open-tomorrow">Opens Tomorrow</button>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <button
          style={{
            backgroundColor: "#ffb20e",
            background: "linear-gradient(#FFBA26,#FF9A0E)",
            border: "none",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            borderRadius: "15px",
            width: "150px",
            height: "50px",
            boxShadow: "0px 0px 10px 1px #ffb20e",
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default Feature;
