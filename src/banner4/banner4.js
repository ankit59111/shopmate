import React from "react"
import "./banner.scss"
import message_icon from "../images/message_icon/black.png"
export function Banner4(props) {
    return(
        <div className="banner4">
            <div className="banner-for-u">
                <h4>10% Discount for your subscription</h4>

            </div>
            <p>Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC.
                Featuring colorful faux leather trim, this tote offers a roomy interior.</p>
            <form className="form-inline">

                <input type="text" className="form-control mb-2 mr-sm-2" id="email2" placeholder="Enter email"
                       name="email"/>
                       <img src={message_icon}/>

                        <button type="submit" className="btn  mb-2">Submit</button>
            </form>
        </div>
    )
}