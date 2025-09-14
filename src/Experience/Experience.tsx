import "./Experience.css";
import Slideshow from "../Slideshow/Slideshow";
import socials25_img from "../assets/socials25.png";
import socials24_img from "../assets/socials24.png";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experiences</h1>
      <div className="experience-container">
        <div className="experience-items">
          <Slideshow />
        </div>
        <div className="experience-text">
          <div className="socials-25-container">
            <h2 style={{ fontFamily: "Arial, sans-serif" }}>
              Socials Director 2025
            </h2>
            <p className="experience-description">
              As Socials Director, I was responsible for planning and executing
              a variety of social events aimed at fostering community and
              engagement among students of CSE. For me, the most valuable part
              of this role was ensuring that our events created inclusive and
              enjoyable experiences for all attendees! (Especially those coming
              for the first time).
              <br />
              <br />
              Some of you guys might have seen me around at our Flagship Peer
              Mentoring event which had almost 450 attendees or maybe at our Ice
              Skating event in Icezoo or even at our Mahjong Night event! We are
              forever grateful to anyone that came along and we hope that you
              had fun with a lot of new people! We were also fortunate enough to
              plan a large variety of events that included collaborating with
              societies such as ENGSoc, IceSoc, MahjongSoc and more. I really
              value people feeling included and welcome at our events, something
              that I will ensure continues to happen next year as an exec!
              <br />
              <br />
              Check slideshow above for some of the events that we organised!
              (we hope to see you at future iterations of these events)
            </p>
            <div className="socials25-img">
              <img src={socials25_img} alt="" />
            </div>
          </div>
          <div className="socials-24-container">
            <h2 style={{ fontFamily: "Arial, sans-serif" }}>
              Socials Subcommittee 2024
            </h2>
            <p className="experience-description">
              In my role as a member of the Socials Subcommittee, I collaborated
              with a team to plan and execute engaging events for the students
              of CSE. I was able to learn from my directors which allowed to me
              to develop my values of inclusivity and ensuring that events were
              enjoyable for all attendees. It was also a great opportunity for
              me to develop my teamwork and communication skills as we worked
              together to plan events that catered for so many people.
            </p>
            <div className="socials25-img">
              <img src={socials24_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
