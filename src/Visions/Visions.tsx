import "./Visions.css";
import visions from "../assets/visions.webp";
const Visions = () => {
  return (
    <div className="visions" id="visions">
      <h1>Visions</h1>
      <div className="visions-container">
        <div className="vision-image-mask">
          <img src={visions} alt="" />
        </div>
        <div className="vision-text">
          <h3>
            {" "}
            As Socials Director, I have worked hard to ensure that our events
            cater towards a diverse range of students and ensure that all
            individuals are welcome to attend, whether they come by themselves
            or with a group of friends.
          </h3>
          <h2>Inclusivity and Diversity</h2>
          <ul>
            <li>
              I will continue to ensure that our events are inclusive and
              welcoming by collaborating with a variety of societies such as
              EngSoc, IceSoc, MahjongSoc and more.{" "}
            </li>
            <li>
              I will also ensure that our events incorporate feedback
              anonymously from attendees to improve future events.
            </li>
            <li>
              I will also continue to ensure that our events are accessible to
              all students by considering factors such as location, timing and
              cost when planning events.
            </li>
          </ul>

          <h2>Community Engagement</h2>
          <ul>
            <li>
              Targetting community cohesion (allowing for more Women In STEM,
              international student, pride and postgrad events) by working
              closely with other ports and societies.
            </li>
            <li>
              Improving the internal structure of CSESoc by allowing for more
              recurring events to occur (e.g. weekly board game nights,
              fortnightly movie nights etc) that allow for more people to come
              along and meet new people in a more relaxed environment.{" "}
            </li>
            <li>
              Continuing to plan large flagship events that allow for the whole
              of CSE to come together and celebrate being part of such a great
              community!
            </li>
          </ul>

          <h2>Professional Development</h2>
          <ul>
            <li>
              Providing more resources and support for students to develop their
              professional skills (e.g. resume workshops, interview preparation,
              networking events) by collaborating with industry partners and
              alumni.{" "}
            </li>
            <li>
              Creating more opportunities for students to gain practical
              experience (e.g. internships, work placements, industry projects)
              by promoting available opportunities and facilitating connections
              with employers.{" "}
            </li>
            <li>
              Supporting students in their career aspirations by offering
              mentorship programs and career guidance events.
            </li>
          </ul>

          <h2>Financial Management</h2>
          <ul>
            <li>
              My personal interest in personal finance has driven me to seek out
              opportunities to learn more about budgeting, saving, and investing
              which I can carry forward to help CSESoc manage its finances
              effectively.
            </li>
            <li>
              Ensure CSESoc maintains a healthy budget by carefully monitoring
              income and expenses, seeking out cost-effective solutions, and
              prioritizing spending on initiatives that provide the most value
              to members.
            </li>
            <li>
              Increase revenue streams by exploring new fundraising
              opportunities, seeking out sponsorships, and promoting CSESoc
              events and initiatives to a wider audience.
            </li>
            <li>
              Ensure transparency and accountability in financial management by
              providing regular updates to the executive team and members,
              maintaining accurate records, and adhering to best practices in
              financial management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visions;
