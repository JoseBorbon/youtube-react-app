import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      message: "",
      role: "",
      myfile: "",
    };
  }

  // handleSubmit = (e) => {
  //   const { name, company, email, message, role, myfile } = this.state;
  //   alert(`Submission Received! 
  //     \nName: ${name} 
  //     \nCompany: ${company} 
  //     \nEmail: ${email}
  //     \nRole: ${role}
  //     \nFile Attached: ${myfile}
  //     \nMessage: ${message}
  //     `);
  //   this.setState({
  //     name: "",
  //     company: "",
  //     email: "",
  //     message: "",
  //     role: "",
  //     myfile: "",
  //   });
  //   e.preventDefault();
  // };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    const styles = {
      width: "650px",
      height: "410px",
      style: "border:0",
      allowfullscreen: "",
      loading: "lazy",
    };

    const { name, company, email, role, myfile, message } = this.state;
 
    return (
      <main>
        <div
          className="contact"
          style={{ backgroundColor: this.props.currBGColor }}
        >
          <section>
            {" "}
            <h3>Get In Touch</h3>
            <div className="showcase-form">
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    required
                  />
                </label>{" "}
                <br />
                <label>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                    placeholder="Company Name"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    required
                  />
                </label>{" "}
                <br />
                <label>
                  Your Role : {""}
                  <select
                    onChange={this.handleChange}
                    name="role"
                    value={role}
                    // multiple
                  >
                    <option value="Team Lead">Team Lead</option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="Front-End Developer">
                      Front-End Developer
                    </option>
                    <option value="Software Engineer">Software Engineer</option>
                  </select>
                </label>
                <br />
                <div className="field">
                  <input
                    type="file"
                    name="myfile"
                    value={myfile}
                    id="myfile"
                    onChange={this.handleChange}
                    placeholder="Upload file"
                  />
                </div>
                {/* spam filtering */}
                <div className="field">
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <p>
                  <label htmlFor="message">
                    Message:
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      required
                    ></textarea>
                  </label>{" "}
                  <br />
                </p>
                <p>
                  <input type="submit" value="Send" className="btn" />
                </p>
              </form>
            </div>
          </section>

          <section>
            <div className="location card">
              <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8666592099808!2d-73.94411018451345!3d40.74295947932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592e9fcf1a65%3A0x7e37044e79db712a!2s47-10%20Austell%20Pl%202nd%20floor%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1639111475214!5m2!1sen!2sus"
                style={styles}
              ></iframe>
            </div>
            <div className="social">
              <a href="https://github.com/">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://twitter.com/home">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Contact;