import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";
import { RiPresentationFill } from "react-icons/ri";

const RightSection = () => {
  return (
    <div>
      <div className="about-me">
        <h2
          style={{
            textTransform: "uppercase",
            display: "inline-block",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          About me
        </h2>
        <hr
          style={{
            height: "3px",
            width: "100px",
            marginLeft: "50px",
            border: "none",
            background: "linear-gradient(90deg, #FE9119,#FE9119)",
            display: "inline-block",
          }}
        />
        <p>
          Hello there! Im thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>
      <div className="skills">
        <div>
          <div>
            <FaCode />
          </div>
          <h4>Web Development</h4>
          <p>
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. Im always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>
        <div>
          <div>
            <FaInstagram />
          </div>
          <h4>App Development</h4>
          <p>
            With a focus on user-centric design and cutting-edge technologies, I
            thrive on building intuitive and efficient apps that make a positive
            impact on peoples lives. Lets turn ideas into reality and shape the
            future together.
          </p>
        </div>
        <div>
          <div>
            <TbUxCircle />
          </div>
          <h4>UI/UX Designing</h4>
          <p>
            Crafting visually appealing and intuitive user interfaces that offer
            a delightful user experience is something Im truly fanatic about.
          </p>
        </div>
        <div>
          <div>
            <RiPresentationFill />
          </div>
          <h4>Mentorship</h4>
          <p>
            I have also found great joy in sharing my knowledge with others.
            Being a technical mentor allows me to give back to the community
            that has supported me throughout my career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
