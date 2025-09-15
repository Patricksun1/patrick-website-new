import "./Contact.css";
import contact_img from "../assets/contact_image.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <div className="contact-content">
        <div className="contact-image-mask">
          <img src={contact_img} alt="Contact" />
        </div>

        <div className="contact-text">
          <h1>Wanna know more?</h1>
          <p>You can reach me at <a href="mailto:patricksun70@gmail.com">patricksun70@gmail.com</a></p>
          <p>Or connect with me on social media:</p>

          <div className="social-buttons">
            <a href="https://www.facebook.com/share/17A9keNR35/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-button facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/pat05rick?igsh=MWhwNHFpbjFha3dscw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-button instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/patrick-sun" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <FaLinkedinIn />
            </a>
            <a href="mailto:patricksun70@gmail.com" className="social-button email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;