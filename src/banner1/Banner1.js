import React from "react";
import bitmap from "../images/bitmap.png";
import "./banner1.scss"

export function Banner1(props) {

    return(
        <div className={"banner1"}>
            <img srcSet={`${bitmap}`} alt={"banner1 "}/>
            <div className="banner1_text">
                <h1>
                    Background and <br/> developmnet
                </h1>
                <p>Convergent the dictates of the <br/> consumer: banckground and <br/> development</p>

                <button type="button" className="button">Check twice</button>
            </div>
        </div>
    )
}