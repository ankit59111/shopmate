import React from 'react';
import shopmate from "../images/logo/shopmate.png";
import shopmate2x from "../images/logo/shopmate@2x.png";
import shopmate3x from "../images/logo/shopmate@3x.png";
import search_icon from "../images/search_icon/black.png";
import cart_icon from "../images/cart_icon/black.png";

export function RegisterHeader(props) {

    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top ">

            <a className="navbar-brand" href="https://www.google.com"><img alt="Shopmate" srcSet={`${shopmate} 1x,${shopmate2x} 2x,${shopmate3x} 3x`}/></a>


            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="https://www.google.comcollapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Women</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Kids</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Shoes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Brands</a>
                    </li>

                </ul>
                <ul className={"nav justify-content-end"}>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">
                            <img src={search_icon} alt={"search_icon"}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">
                            <img src={cart_icon} alt={"cart_icon"}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}