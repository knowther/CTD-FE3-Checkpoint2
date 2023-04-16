import {useContext } from "react";
import styles from "./Navbar.module.css";
import { AuthContext } from "../contexts/auth-context";
import { ThemeContext } from "../contexts/theme-context";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Navbar = () => {
  const { stsLogin, removeUserStorage } = useContext(AuthContext);
  const { theme, handleChangeTheme } = useContext(ThemeContext);


  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to={"/"}>
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>


                {
                  stsLogin == "Logout" ? 
                    <Link className="nav-link" onClick={() => removeUserStorage()} to={'/login'}>
                   {
                    stsLogin
                   }
    
                </Link> : 
                <Link className="nav-link" >
                {
                 stsLogin
                }
 
             </Link>
                }
                
                
                {/* <a className="nav-link" href={stsLogin === "Login" ? "/login" : "/"}
                onClick={() => {
                  if(stsLogin === "Logout") 
                    removeUserStorage();
                  }}>
                  {stsLogin}
                </a> */}
              
                
              </li>
              <li className={`nav-item`}>
                <button onClick={handleChangeTheme}
                  className={`btn btn-${theme == "dark" ? 'dark' : 'light'} ${styles.btnStyle
                    }`}
                >
                  {theme == "dark" ? '☀' : '🌙' }
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
