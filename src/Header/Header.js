import React from "react";
import "./Header.scss";
import shopmate from "../images/logo/shopmate.png"
import shopmate2x from "../images/logo/shopmate@2x.png"
import shopmate3x from "../images/logo/shopmate@3x.png"
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                <a className="navbar-brand" href="#"><img alt="Shopmate" srcSet={`${shopmate} 1x,${shopmate2x} 2x,${shopmate3x} 3x`}/></a>


                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Brands</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}