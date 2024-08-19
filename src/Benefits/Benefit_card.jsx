import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Benefits/benefit.css';


function Benefit_card({image_url, Heading, Description}){
    return(
        <div className="text-center Benefit_Card">
            <center>
            <img src={image_url} alt="" className="Benefit_Card_image"/>
            </center>
            <h2 className="benefit_card_heading">{Heading}</h2>
            <p className="benefit_card_description">{Description}</p>
        </div>
    );
}

export default Benefit_card;