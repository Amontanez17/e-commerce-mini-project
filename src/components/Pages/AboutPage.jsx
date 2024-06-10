// import { useState } from "react";
// import { useParams } from "react-router-dom";
import "../Pages/AboutPage.css";

function AboutPage() {
  return (
    <section id="aboutPageContainer">
      <div id="aboutText">
        {" "}
        {/* <h1>About Page</h1> */}
        <h2>Meet The team</h2>
        <p>
          We are Ruihua and Angela.Two web developement students at Ironhack
          France. This is our first React project and we are thrilled to be able
          to share it with you!
        </p>
        <br />
        <p>
          Check out our GitHub and LinkedIn profiles to see more of our work
        </p>
      </div>
      <div id="teamMemberContainer">
        <div className="teamMember">
          <img
            className="profileImg"
            src="https://ca.slack-edge.com/T071BUYCF98-U072JL2TZSL-f46c782a374d-512"
            alt="profile image"
          />
          <h3>Ruihua Zhang</h3>
          <div className="socialLinks">
            <a href="https://github.com/jasperzhang75">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ruihua-zhang-52a344157/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="teamMember">
          <img
            className="profileImg"
            src="https://ca.slack-edge.com/T071BUYCF98-U071E0GPVJT-26279996c14b-512"
            alt="profile image"
          />
          <h3>Angela Montanez</h3>
          <div className="socialLinks">
            <a href="https://github.com/Amontanez17">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/angela-montanez/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
