import "./Contact.css";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const styles = {
    width:"300px",
     height:"350px",
      style:"border:0",
       allowfullscreen:"",
       loading:"lazy"
};
  return (
    <>
      <Link to="/Contact"> Contact</Link>
      <div className="contact">
        <section>
          <div class="showcase-form">
            <form name="contact" method="POST" data-netlify="true">
              <h2>Get In Touch</h2>
              <div class="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div class="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>

              <label>
                Your Role : {""}
                <select name="role[]" multiple>
                  <option value="leader">Team Lead</option>
                  <option value="follower">Full Stack Developer</option>
                  <option value="follower">Front-End Dev</option>
                </select>
              </label>

              <br />
              <div class="field">
                <input type="file" name="myfile" placeholder="Upload file" />
              </div>
              <br />
              {/* spam filtering */}
              <div class="field">
                <div data-netlify-recaptcha="true"></div>
              </div>

              <p>
                <label>
                  Message : <textarea name="message"></textarea>
                </label>
              </p>

              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </section>
        <section>
          <div className="location card">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8666592099808!2d-73.94411018451345!3d40.74295947932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592e9fcf1a65%3A0x7e37044e79db712a!2s47-10%20Austell%20Pl%202nd%20floor%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1639111475214!5m2!1sen!2sus" style={styles} ></iframe>
          </div>

          <div class="social">
            <a href="#">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
