import "./project.css";
import construction1 from "./construction1.png";
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
            <img src={construction1} alt="Construction machinery" />
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
              <h2>Phases</h2>
              <button className="add-button">Add New</button>
              <div className="phase-card completed">
                <h3>Phase Name (3/4)</h3>
                <p>Completed</p>
                <p>Nov 3 2023</p>
              </div>
              <div className="phase-card ongoing">
                <h3>Phase Name (3/4)</h3>
                <p>Ongoing</p>
                <p>Nov 3 2023</p>
              </div>
              <div className="phase-card delayed">
                <h3>Phase Name (3/4)</h3>
                <p>Delayed</p>
                <p>Nov 3 2023</p>
              </div>
            </section>

            <section className="phase-details">
              <h2>Phase Details</h2>
              <div className="detail-item">
                <span>Total days</span>
                <span>106</span>
              </div>
              <div className="detail-item">
                <span>Past days</span>
                <span>45</span>
              </div>
              <div className="detail-item">
                <span>Estimated days</span>
                <span>6</span>
              </div>
              <div className="detail-item">
                <span>Labour Cost</span>
                <span>$567</span>
              </div>
              <div className="detail-item">
                <span>Material Cost</span>
                <span>$567</span>
              </div>
            </section>
          </div>
        </section>
        <section className="activity">
          <h2>Activity</h2>
          <button className="add-button">Add New</button>
          <ul>
            <li>Grey Structure (blue)</li>
            <li>Structure (red)</li>
            <li>Ongoing (green)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Project;
