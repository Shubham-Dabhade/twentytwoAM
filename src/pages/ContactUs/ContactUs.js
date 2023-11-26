import React, { useEffect, useRef, useState } from "react";
import "./contactus.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import TitleIcon from "@mui/icons-material/Title";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "@mui/material/Alert";
// import PhoneInput from "react-phone-number-input";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from '@mui/icons-material/Business';
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import {
  useTransform,
  useScroll,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import Navbar from "../../components/Alternate_Navbar/Navbar/Navbar";
import Footer from "../../components/Alternate_Footer/Footer";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mdorvavr");
  // const [state, handleSubmit] = useForm("mgejqbwd");
  const phonemouse = useRef();
  const [alert, setAlert] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = useRef(null);
  const isInView = useInView(contactUs);

  // useEffect(()=>{
  //   if(isInView){
  //     changeTheContactButton();
  //   }
  //   else{
  //     outOfView();
  //   }
  // },[isInView]);



  useEffect(() => {
    setName("");
    setEmail("");
    setNumber(" ");
    setCompany("");

    // setSubject("");
    setMessage("");
    if (state.succeeded) {
      setAlert(true);
    }
  }, [state.succeeded]);


  return (
    <>
    <Navbar/>
      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          className="show-alert"
        >
          Message sent Successfully!
        </Alert>
      )}

      <motion.section id="ContactUs" ref={contactUs} >
        <div className="ContactUs-container">
          <div className="contactus-left-container">
            <div className="contactus-heading"> CONTACT US</div>
            <div className="contactus-form-container">
              <form className="contactus-form" onSubmit={handleSubmit}>
                <div className="input-container">
                  <PersonIcon className="input-icons" />
                  <input
                    type="text"
                    className="contactus-input-fields"
                    placeholder="Full Name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container">
                  <EmailIcon className="input-icons" />
                  <input
                    type="email"
                    className="contactus-input-fields"
                    placeholder="Email"
                    name="email"
                    required
                    autoCorrect="false"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container">
                  <BusinessIcon className="input-icons" />
                  <input
                    type="text"
                    className="contactus-input-fields"
                    placeholder="Company Name"
                    name="company"
                    required
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                  <ValidationError
                    prefix="Company"
                    field="company"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container">
                  <LocalPhoneIcon className="input-icons" />
                  <PhoneInput
                    type="number"
                    placeholder="Phone Number"
                    country={"in"}  
                    // countrySelectProps={{ unicodeFlags: true }}
                    // minLength={10}
                    maxlength="10"
                    pattern="[1-9]{1}[0-9]{9}"
                    // value={number}
                    value={number}
                    required
                    ref={phonemouse}
                    className="contactus-input-fields"
                    onChange={(value) => {
                      setNumber(value);
                    }}
                  />
                  <input type="hidden" value={number} name="phone"></input>
                  <ValidationError
                    prefix="Phone No:"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                {/* <div className="input-container">
                  <TitleIcon className="input-icons" />
                  <input
                    type="text"
                    className="contactus-input-fields"
                    placeholder="Subject"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div> */}
                <textarea
                  className="contactus-input-fields"
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  className="contactus-button"
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="contactus-right-container">
            <img
              className="contactus-right-image"
              src={require("../../images/contactus/5118756-removebg.png")}
              alt="contactus"
            />
          </div>
        </div>
      </motion.section>
      <Footer/>
    </>
  );
};

export default ContactUs;
