/* eslint-disable */
import { NavLink, useLocation } from "react-router-dom";
import {createUseStyles} from "react-jss";

const iconColor = "#2B2A2A";
const yellow = "#ffb400";

const useStyle = createUseStyles({
  nav: {
    "& a": {
      padding: "0.75rem",
      backgroundColor: iconColor,
      borderRadius: "50%",
      position: "relative",
      transition: "all .2s ease",
      // "&:before": {
      //   content: "'portfolio'",
      //   height: "100%",
      //   position: "absolute",
      //   top: 0,
      //   right: 0,
      //   color: "#FFFFFF",
      //   backgroundColor: "#252525",
      //   borderRadius: "30px",
      //   display: "flex",
      //   alignItems: "center",
      //   zIndex: -1,
      //   paddingLeft: "1.5em",
      //   paddingRight: "3em",
      //   transition: "all .2s ease",
      //   transform: "scaleX(0)",
      //   textTransform: "uppercase"
      // },
      "&:hover": {
        backgroundColor: yellow,
        "&:before": {
          backgroundColor: yellow,
          transform: "scaleX(100%)"
        },
        "& div": {
          transform: "scaleX(100%)"
        }
      }
    }
  },
  active: {
    backgroundColor: [yellow, "!important"]
  },
  hovered: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "#fff",
    background: yellow,
    padding: {
      left: "1em",
      right: "3em",
    },
    borderRadius: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    transition: "all .2s ease",
    zIndex: -1,
    textTransform: "uppercase",
    transform: "scaleX(0)",
    fontWeight: 500
  }
});

export default function Navbar() {
  const classes = useStyle();

  return (
    <>
      <nav className={classes.nav + " flex fixed flex-col items-center space-y-6 right-8 top-1/4 z-10"}>
        {/* icons */}
        <NavLink activeClassName={classes.active} exact={true} to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-10" fill="white" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <div className={classes.hovered}>Home</div>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/about">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <div className={classes.hovered}>About</div>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          <div className={classes.hovered}>Portfolio</div>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/contact">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
          </svg>
          <div className={classes.hovered}>Contact</div>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/blog">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <div className={classes.hovered}>Blog</div>
        </NavLink>
      </nav>
    </>
  );
}
