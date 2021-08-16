import React from "react";
import "./Contact.css";
import male from "../assets/male.png"
import female from "../assets/female.png";
import notSet from "../assets/transgender.png";
import phoneIcon from "../assets/phone.png";


const Contact = ({props}) => {
    let gender;
    if (props.gender === "male") {
        gender = male;
    } else if (props.gender === "female") {
        gender = female;
    } else {
        gender = notSet;
    }

    return (
        <div className="contact-item">
            <img src={props.src} className="contact-icon" alt="" />
            <img src={gender} className="contact-gender" alt="" />
            <div className="contact-info">
                <span> {`${props.firstName} ${props.lastName}`} </span>
                <span> {props.phone} </span>
            </div>
            <img src={phoneIcon} className="contact-call"alt="" />
        </div>
    );
};


export default Contact;