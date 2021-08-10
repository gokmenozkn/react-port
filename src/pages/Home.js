import Layout from "../lib/Layout";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  btn: {
    border: {
      width: "1px",
      color: "#FFB400",
      radius: "1.5em"
    },
    padding: ".8em 4em",
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
  icon: {
    position: "absolute",
    right: -1,
    top: 0,
    padding: ".8em",
    // width: "3.3rem",
    // height: "3.3rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

function Home() {
  const classes = useStyles();

  return (
    <Layout title="Home">
      <div className="flex h-screen px-10 items-center">
        {/* <!-- Image --> */}
        <div id="img" className="max-w-md">
          <img src="/img/portrait.jpg" alt="" className="w-full rounded-3xl" />
        </div>

        {/* <!-- Content --> */}
        <div id="content" className="text-white flex-1 px-40">
          <div id="name" className="font-bold text-6xl mb-8">
            <div id="hyphen" className="text-yellow-500">
              <span className="mr-6 font-medium">—</span>
              I'M STEVE MILNER.
            </div>
            <div>WEB DESIGNER</div>
          </div>
          <div id="bio" className="mb-10">
            <p className="leading-8 text-lg">
              I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </p>
          </div>
          <div id="button" className="relative">
            <button className={classes.btn}>
              <span className="-ml-6">More About Me</span>
              <span style={{ backgroundColor: "#FFB400" }} className={classes.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      
      </div>
      
    </Layout>
  );
}

export default Home;