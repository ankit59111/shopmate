import React from "react";
import "./Header.scss";
import cart_icon from "../images/cart_icon/black.png"
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                <a className="navbar-brand" href="https://www.google.com">Hi! <span> Sign In</span> or <span>Register</span></a>


                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Daily Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Sell</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Help & Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">£ GBP</a>
                        </li>

                    </ul>
                    <ul className={"nav justify-content-end"}>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">
                                Your bag: £3.99
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
}