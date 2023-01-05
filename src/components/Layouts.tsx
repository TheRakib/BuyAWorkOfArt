import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";
import shoppingBag from "../images/shoppingBag.png";
import "../styles/main.scss";

export const Layouts = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="layoutsWrapper">
      <header>
        <Link to="/" className="home">
          <h2>hangIt</h2>
        </Link>
        <div className="nav-div">
          <nav>
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <Link to="/artwork" className="meny">
                  <h3 className="nav-link">Art</h3>
                </Link>
              </li>
              <li>
                <Link to="/about" className="booking">
                  <h3 className="nav-link">About us</h3>
                </Link>
              </li>
              <li>
                <Link to="/login" className="login">
                  <h3 className="nav-link">Log in</h3>
                </Link>
              </li>
              <Link to="/shoppingCart" className="">
                <img
                  className="shopping-bag"
                  src={shoppingBag}
                  alt="shopping cart"
                ></img>
              </Link>
            </ul>

            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <li className="fas fa-times"></li>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
