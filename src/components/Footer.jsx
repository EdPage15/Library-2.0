import React from "react";
import Logo from "../assets/Library (2).svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list" alt="">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" class="footer__link">Books</Link>
                        <Link to="/cart" class="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2026 Library
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 