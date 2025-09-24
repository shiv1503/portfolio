import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivendu Nagar  </span>
            from <span className="purple"> Khatima,Uttrakhand,India.</span>
            <br />
            I am a MCA graduate.
            <br />
            I have completed my graduation from <span className="purple">Graphic Era Hill University</span> with specialization in
            <span className="purple"> Computer Science.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding bikes and driving cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places
            </li>
             <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
             <li className="about-activity">
              <ImPointRight /> And last but not the least, i am a tech enthusiast! 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">shivendu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
