import "./project.css";
import construction1 from "./construction1.png";
import dotsVertical from "./dotsVertical.png";
import EllipseHouse from "./EllipseHouse.png";
import photo from "./photo.svg";
import material from "./material.svg";
function Project() {
  return (
    <div>
      <main className="dashboard">
        <header className="dashboard-header">
          <nav className="dashboard-nav">
            <ul className="dashboard-ul">
              <li>Home</li>
              <li>Deadlines</li>
              <li>Project</li>
              <li>Request</li>
              <li>Activities</li>
              <li>Material</li>
              <li>Payment</li>
            </ul>
          </nav>
          <div className="dashboard-image">
            <img
              className="Construction-logo"
              src={construction1}
              alt="Construction machinery"
            />
          </div>
        </header>
        <div className="header-divider"></div>
        <section className="dashboard-content">
          <section className="phase-summary">
            <div className="first-column">
              <div className="summary-item">
                <span className="same-text">Total days</span>
                <span className="same-color">106</span>
              </div>
              <div className="summary-item">
                <span className="same-text">Past days</span>
                <span className="past-text">45</span>
              </div>
              <div className="summary-item">
                <span className="same-text">Estimated days</span>
                <span className="same-color">6</span>
              </div>
            </div>
            <div className="item-divider"></div>
            <div className="second-column">
              <div className="summary-item">
                <span className="same-text">Labour Cost</span>
                <span className="same-color">$567</span>
              </div>
              <div className="summary-item">
                <span className="same-text">Material Cost</span>
                <span className="same-color">$567</span>
              </div>
            </div>
          </section>

          <div className="two-column">
            <section className="phases">
              <div className="h2-btn">
                <h2 className="left-column-heading">
                  Phases <span className="column-heading-span">(6)</span>
                </h2>
                <div>
                  <button className="add-button">+</button>
                  <span className="add-new-button">Add New</span>
                </div>
              </div>
              <div className="project-cards">
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-ongoing">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome-ongoing">ongoing</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-delayed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome-delayed">Delayed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
                <div className="phase-card-completed">
                  <div className="left-card">
                    <div className="phase-img-name">
                      <img src={EllipseHouse} alt="" />
                      <h4 className="phase-name">
                        Phase Name
                        <span className="phase-name-span">(3/4)</span>
                      </h4>
                    </div>
                    <div className="status">
                      <h4 className="status-text">status</h4>
                      <h4 className="status-outcome">Completed</h4>
                    </div>
                  </div>
                  <div className="right-card">
                    <img className="dots-vertical" src={dotsVertical} alt="" />
                    <h4 className="start-date">Nov 2,2020</h4>
                    <h4 className="end-date">oct 2,2020</h4>
                    <h4 className="no-activities">
                      No. of Activities
                      <span className="no-activity-span">4</span>
                    </h4>
                  </div>
                </div>
              </div>
            </section>

            <section className="phase-details">
              <h4 className="phase-details-text">Phase Details</h4>
              <section className="phase-summary-right">
                <div className="first-column-right">
                  <div className="summary-item">
                    <span className="same-text">Total days</span>
                    <span className="same-color">106</span>
                  </div>
                  <div className="summary-item">
                    <span className="same-text">Past days</span>
                    <span className="past-text">45</span>
                  </div>
                  <div className="summary-item">
                    <span className="same-text">Estimated days</span>
                    <span className="same-color">6</span>
                  </div>
                </div>
                <div className="item-divider"></div>
                <div className="second-column-right">
                  <div className="summary-item">
                    <span className="same-text">Labour Cost</span>
                    <span className="same-color">$567</span>
                  </div>
                  <div className="summary-item">
                    <span className="same-text">Material Cost</span>
                    <span className="same-color">$567</span>
                  </div>
                </div>
              </section>
              <section className="input-form">
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    Phase Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="IDK Phase"
                  />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    Start Date
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="OCT 1,2020"
                  />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    End Date
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="OCT 4,2020"
                  />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    Labor Cost
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="121$"
                  />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    Material Cost
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="on going"
                  />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    Estimated Days
                  </label>
                  <input className="form-input" type="text" placeholder="45" />
                </div>
                <div className="label-input">
                  <label className="label-text" htmlFor="">
                    No. of past day
                  </label>
                  <input className="form-input" type="text" placeholder="33" />
                </div>
              </section>
              <section className="activity">
                <div className="activity-heading">
                  <h2 className="left-column-heading">
                    Activity <span className="column-heading-span">(6)</span>
                  </h2>
                  <div>
                    <button className="add-button">+{""}</button>
                    <span className="add-new-button">Add New</span>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-left">
                    <h4 className="gray-structure-text">
                      Gray Structure
                      <span className="gray-structure-span">(2/5)</span>
                    </h4>
                    <div className="left-side">
                      <h4 className="complete-status">Status</h4>
                      <h4 className="complete-status-text">Completed</h4>
                    </div>
                  </div>
                  <div className="activity-right">
                    <img className="mtrl-img" src={material} alt="" />
                    <img className="pht-img" src={photo} alt="" />
                    <div className="date">
                      <h4 className="activity-start-date">Nov 2, 2020</h4>
                      <h4 className="activity-end-date">Oct 2, 2020</h4>
                    </div>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-left">
                    <h4 className="gray-structure-text">
                      Gray Structure
                      <span className="gray-structure-span">(2/5)</span>
                    </h4>
                    <div className="left-side">
                      <h4 className="complete-status">Status</h4>
                      <h4 className="pending-status-text">pending</h4>
                    </div>
                  </div>
                  <div className="activity-right">
                    <img className="mtrl-img" src={material} alt="" />
                    <img className="pht-img" src={photo} alt="" />
                    <div className="date">
                      <h4 className="activity-start-date">Nov 2, 2020</h4>
                      <h4 className="activity-end-date">Oct 2, 2020</h4>
                    </div>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-left">
                    <h4 className="gray-structure-text">
                      Gray Structure
                      <span className="gray-structure-span">(2/5)</span>
                    </h4>
                    <div className="left-side">
                      <h4 className="complete-status">Status</h4>
                      <h4 className="complete-status-text">Completed</h4>
                    </div>
                  </div>
                  <div className="activity-right">
                    <img className="mtrl-img" src={material} alt="" />
                    <img className="pht-img" src={photo} alt="" />
                    <div className="date">
                      <h4 className="activity-start-date">Nov 2, 2020</h4>
                      <h4 className="activity-end-date">Oct 2, 2020</h4>
                    </div>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-left">
                    <h4 className="gray-structure-text">
                      Gray Structure
                      <span className="gray-structure-span">(2/5)</span>
                    </h4>
                    <div className="left-side">
                      <h4 className="complete-status">Status</h4>
                      <h4 className="complete-status-text">Completed</h4>
                    </div>
                  </div>
                  <div className="activity-right">
                    <img className="mtrl-img" src={material} alt="" />
                    <img className="pht-img" src={photo} alt="" />
                    <div className="date">
                      <h4 className="activity-start-date">Nov 2, 2020</h4>
                      <h4 className="activity-end-date">Oct 2, 2020</h4>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Project;
