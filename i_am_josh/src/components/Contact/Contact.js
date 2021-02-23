import React, { Component } from "react";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";
import emailjs from "emailjs-com";
import contactPic from "./Coding8.jpg";
import "./Contact.css";

// I need to figure out how to connect this to a db or email...

class Contact extends Component {
  validateForm = (e) => {
    e.preventDefault();
    let x = document.forms["myForm"]["firstname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    let z = document.forms["myForm"]["email"].value;
    // let a = document.forms["myForm"]["phone"].value;
    let b = document.forms["myForm"]["subject"].value;
    if (x == "") {
      alert("You must enter your first name");
      return false;
    } else if (y == "") {
      alert("You must enter your last name");
      return false;
    } else if (z == "") {
      alert("You must enter your email");
      return false;
      // } else if (a == "") {
      //   alert("You must enter a phone number");
      //   return false;
    } else if (b == "") {
      alert("You must enter a message");
      return false;
    }
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lnru4zi",
        "template_b34h16c",
        e.target,
        "user_xK205me4ihCnjGx4dZ1IP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  render() {
    return (
      <>
        <div className="whole">
          <div className="contactbox">
            <div>
              <h2>Contact</h2>
              <p>
                I am always looking for an opportunity to collaborate and have
                open-minded talks about technology, code, or music. I can also
                share my experience, or discuss any sort of potential venture
                where I could bring my technical expertise to the table.
                Business or individual. Please feel free to reach out!
              </p>
            </div>
            <div className="row">
              <div className="column2">
                <img src={contactPic} width="520" height="400" />
              </div>

              <div className="column1">
                <form
                  noValidate
                  name="myForm"
                  onSubmit={this.validateForm && this.sendEmail} // & this.sendEmail
                >
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your first name.."
                  />
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder=" Your last name.."
                  />
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email.."
                  />
                  {/* <label for="phone">Your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                /> */}

                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message.."
                    // style="height:170px"
                  ></textarea>
                  <input className="btn2" type="submit" value="Submit"></input>
                  {/* <div id="status">Success!</div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
