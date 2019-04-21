import React from "react"
import "./banner5.scss"

export function Banner5(props) {

    return(

        <footer className="page-footer font-small indigo">


            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-3 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">QUESTIONS?</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Help</a>
                            </li>
                            <li>
                                <a href="#!">Track Order</a>
                            </li>
                            <li>
                                <a href="#!">Returns</a>
                            </li>

                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none"/>

                        <div className="col-md-3 mx-auto">

                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">WHAT'S IN STORE</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Women</a>
                                </li>
                                <li>
                                    <a href="#!"> Men</a>
                                </li>
                                <li>
                                    <a href="#!">Product A-Z</a>
                                </li>
                                <li>
                                    <a href="#!"> Buy Gift Vouchers</a>
                                </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none"/>

                            <div className="col-md-3 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">FOLLOW US</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#!">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#!"> YouTube</a>
                                    </li>

                                </ul>

                            </div>
                </div>

            </div>

            <div className="footer-copyright text-center py-3">©2016 shopmate Ltd
            </div>

        </footer>
    )
}
