/* eslint-disable */
import Layout from "../lib/Layout";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  deneme: {
    cursor: "pointer",
    "&:after": {
      backgroundColor: "#ffb400",
      width: "100%",
      height: "100%",
      content: "'Image Project'",
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translateX(100%)",
      borderRadius: "0.25rem",
      transition: "all .3s ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "1.25rem"
    },
    "&:hover": {
      "&:after": {
        transform: "translateX(0)"
      }
    }
  }
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Layout title="Portfolio">
      <header className="flex justify-center py-20">
        <h1 className="text-white text-center text-6xl uppercase font-extrabold">
          My 
          <span className="text-yellow-500"> Portfolio</span>
        </h1>
      </header>

      <div className="container mx-auto px-4 md:px-10 mb-10 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-1.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-2.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-3.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-4.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-5.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-6.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-7.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-8.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className={classes.deneme}>
              <img src="/img/project-9.jpg" className="rounded w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}