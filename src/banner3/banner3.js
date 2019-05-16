import React from "react"
import "./banner3.scss"
import card2 from "../images/assets/card2/3-block-6.png"
import card3 from "../images/assets/card3/bitmap.png"

export function Banner3(props) {

    return (
        <div className="banner3 row">
            <div className="col-4">
                <div className="card1">
                    <h3>
                        WOW
                    </h3>
                    <h5>
                        Check WHAT!
                    </h5>
                </div>
                <div className="card2">
                    <img srcSet={card2} alt={"card2"}/>
                </div>

            </div>
            <div className={"col-8"}>
                <div className={"img"}>
                    <img srcSet={card3} alt={"card3"}/>
                </div>
                <div>
                <h1>Let the Game begin</h1>
                <p>Registration is on - get ready for the Open</p>
                    <button className={"button"}>Subscribe</button>
                </div>
            </div>

        </div>
    )
}