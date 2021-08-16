import React from "react";
import "./Photos.css";

import foto1 from "../assets/sw/1.jpeg";
import foto2 from "../assets/sw/2.jpeg";
import foto3 from "../assets/sw/3.jpg";
import foto4 from "../assets/sw/4.jpg";
import foto5 from "../assets/sw/5.jpg";
import foto6 from "../assets/sw/6.jpg";
import foto7 from "../assets/sw/7.jpg";
import foto8 from "../assets/sw/8.jpg";


const Photos = () => {
    return (
        <div className="galery">
            <img src={foto1} alt="star wars img" />
            <img src={foto2} alt="star wars img" />
            <img src={foto3} alt="star wars img" />
            <img src={foto4} alt="star wars img" />
            <img src={foto5} alt="star wars img" />
            <img src={foto6} alt="star wars img" />
            <img src={foto7} alt="star wars img" />
            <img src={foto8} alt="star wars img" />
        </div>
    );
};

export default Photos;