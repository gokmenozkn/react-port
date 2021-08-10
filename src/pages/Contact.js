/* eslint-disable */

import Layout from "../lib/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  message: {
    width: "100%",
    "& textarea": {
      width: "100%",
      backgroundColor: "#2B2A2A",
      padding: "1em 1.5em",
      color: "white",
      borderRadius: "2em",
      outline: "none",
      transition: ".3s",
      border: "1px solid #111",
      "&:focus": {
        borderColor: "#ffb400",
      },
      height: "10rem",
      "&::placeholder": {
        color: "#757575"
      }
    }
  },
  btn: {
    border: {
      width: "1px",
      color: "#FFB400",
      radius: "1.5em"
    },
    padding: ".8em 2em",
    textTransform: "uppercase",
    fontWeight: "bold",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      right: 0,
      width: "100%",
      height: "150%",
      transform: "translateX(100%)",
      transition: "all .3s ease",
      backgroundColor: "#FFB400",
      zIndex: -1
    },
    "&:hover": {
      "&:before": {
        transform: "translateX(0)"
      }
    },
  },
  formInput: {
    width: "100%",
    "& input": {
      width: "100%",
      backgroundColor: "#2B2A2A",
      padding: ".8em 1.5em",
      border: {
        width: "1px",
        radius: "1.5em",
        color: "#111"
      },
      outline: "none",
      color: "white",
      "&::placeholder": { color: "#757575" },
      transition: ".3s",
      "&:focus": { borderColor: "#ffb400", }
    }
  },
  social: {
    "& a": {
      transition: ".3s"
    }
  }
});

export default function Contact() {
  const classes = useStyles();

  return (
    <Layout title="Contact">
      <header className="flex justify-center py-20">
        <h1 className="text-white text-center text-6xl uppercase font-extrabold">
          Get In 
          <span className="text-yellow-500"> Touch</span>
        </h1>
      </header>

      
      {/* <div className="container mx-auto px-20"> */}
        <div className="flex flex-wrap justify-around px-40">
          <div className="left text-white max-w-sm pr-8">
            <h2 className="font-bold text-2xl mb-4">DON'T BE SHY!</h2>
            <p className="mb-4">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="contact w-full flex items-center space-x-3 mb-4">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#ffb400">
                  <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="info">
                <h3 className="uppercase text-gray-400">mail me</h3>
                <span className="mail">steve@mail.com</span>
              </div>
            </div>
            <div className="contact flex items-center space-x-3 mb-4">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#ffb400">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="info">
                <h3 className="uppercase text-gray-400">call me</h3>
                <span className="phone">+216 21 184 010</span>
              </div>
            </div>

            <div className={classes.social + " py-2 flex items-center space-x-4"}>
              <a href="#" className="flex items-center justify-center bg-icons w-8 h-8 rounded-full p-5 hover:bg-yellow-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="flex items-center justify-center bg-icons w-8 h-8 rounded-full p-5 hover:bg-yellow-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="flex items-center justify-center bg-icons w-8 h-8 rounded-full p-5 hover:bg-yellow-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="flex items-center justify-center bg-icons w-8 h-8 rounded-full p-5 hover:bg-yellow-400">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>
          </div>
          
          {/* Form */}
          <div className="right flex-1 relative">
            <div className="top flex justify-between mb-8 space-x-8">
              <div className={classes.formInput}>
                <input type="text" placeholder="YOUR NAME" />
              </div>
              <div className={classes.formInput}>
                <input type="email" placeholder="YOUR EMAIL" />
              </div>
              <div className={classes.formInput}>
                <input type="text" placeholder="YOUR SUBJECT" />
              </div>
            </div>
            <div className="bottom">
              <div className={classes.message}>
                <textarea name="textarea" placeholder="YOUR MESSAGE"></textarea>
              </div>
              <button className={"text-white mt-5 " + classes.btn}>
                Send message
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Layout>
  );
}