import { Link } from "react-router-dom";
import "./About.css";
import Slideshow from "../Slideshow/Slideshow";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-header">
        <Link to="/" className="back-arrow">
          ← Back
        </Link>

        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <h2>Who am I?</h2>
        <div className="about-description">
          <div className="about-description-text">
            <div className="about-card">
              <p>
                Hey I'm Patrick a third year mechanical engineering / computer science student. I'm the
                current president of CSESoc and very interested in the tech
                space. Fun fact is the day after my HSC, I went skydiving (to relieve the stress) and if I'm not
                working then you'll probably find me playing or watching sport. I've always loved watching and playing
                basketball. I'm always free to have a chat if you're interested :). 
              </p>
            </div>
          </div>
        </div>
        <h2>Extracurricular Activities:</h2>
        <div className="extracirricular-text">
          <div className="csesoc-container">
            <h3>
              <u>CSESoc President (Oct 2025 - Present)</u>
            </h3>
            <p>
              - Led a society serving 15,000+ members, overseeing all technical,
              academic and social initiatives
              <br />
              - Directed a committee of 36 directors and 100+ subcommittee
              members
              <br />- Represented computer science students to faculty, industry
              partners and university leadership
            </p>
            <h3>
              <u>CSESoc Socials Director (Nov 2024 - Oct 2025)</u>
            </h3>
            <p>
              - Organised CSESoc's Flagship Peer Mentoring Program which
              involves interviewing and selecting 80 mentors from a pool of 150+
              applicants to lead over 340+ First Year Mentees
              <br />
              - Collaborated with with other societies directors such as EngSoc
              to plan a sports day for over 600+ participants from both peer
              mentoring groups
              <br />- Frequently presented in front of 200+ people during
              CSESoc's popular events
            </p>
            <h3>
              <u>CSESoc Socials Subcommittee (Mar 2024 - Nov 2024)</u>
            </h3>
            <p>
              - Undertook training in learning how to run events from previous
              directors
              <br />
              - Collaborated with 7 other members to co-organise events for
              philanthropic and social purposes
              <br />- Facilitated student transition into university and
              increased engagement within the CSE community
            </p>
            <h3>
              <u>CSESoc Camp Leader (Feb 2025)</u>
            </h3>
            <p>
              - Led a group of 12 first year students over the course of 3 days,
              introducing them to university life
            </p>
            <Slideshow />
          </div>
          <div className="engsoc-container">
            <h3>
              <u>EngSoc ACE Program (May 2025 - Jul 2025)</u>
            </h3>
            <p>
              - Collaborated with a team of 5 other students to work on case
              competitions
              <br />
              - Learnt how to deliver presentations which improved communication
              skills as well as problem solving skills
              <br />- Weekly presentations to over 50 students
            </p>
          </div>
          <div className="devsoc-container">
            <h3>
              <u>DevSoc Training Program (May 2024 - Aug 2024)</u>
            </h3>
            <p>
              - Created a web-app game called Keyword in a team of 5 throughout
              the course of a trimester
              <br />
              - Learnt how to create frontend pages for the website, using
              react, typescript and committing via git
              <br />- Presented our group project to 50+ students
            </p>
          </div>
        </div>
        <h2>Education</h2>
        <div className="education-text">
          <div className="unsw-container">
            <h3>
              <u>University of New South Wales (2024 - 2027)</u>
            </h3>
            <p>
              - Degree: Bachelor of Engineering (Honours) / Bachelor of Science
              (Computer Science)
              <br />
              - WAM: High Distinction
              <br />
              - Computer Science and Engineering Society (President),
              Engineering Society (General Member),
              <br />
              UNSW Software Development Society (General Member),
            </p>
          </div>
          <div className="high-school-container">
            <h3>
              <u>Fort Street High School (2018 - 2023)</u>
            </h3>
            <p>
              - ATAR: 99.35
              <br />
              - 9/155 Class Ranking at Academically Selective School
              <br />- Student Representative Council Board Member
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
