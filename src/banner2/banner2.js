import React from "react";
import bitmap from "../images/banner2_bag/bitmap.png";
import sale_tag from "../images/sale_tag/green.png"
import "./banner2.scss"

export function Banner2(props) {

    return(
        <div className={"banner2 row"}>
            <div className={"column1 col-4"}>
                <img className={"bag_img"} srcSet={`${bitmap}`} alt={"bag_img"}/>
                <img className={"sale"} srcSet={`${sale_tag}`} alt={"sale_image"}/>
            </div>

            <div className="col-8">
                <h3>Vera Bradley</h3>
                <p>Carry the day in style with this extra-large tote crafted in our chic
                    B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers
                    a roomy interior plus
                    just enough perfectly placed pockets to keep smaller items organized and easy to find.
                </p>
                <button className={"button"}>Subscribe</button>

            </div>
        </div>
    )
}