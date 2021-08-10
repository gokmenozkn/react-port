import Layout from "../lib/Layout";
import { createUseStyles } from "react-jss";
import Button from "../components/Button";
import Skillbar from "../components/Skillbar";
import Education from "../components/Education";

const gray = "#252525";
const openSans = "url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap')";
const yellow = "#FFB400";

const useStyle = createUseStyles({
  '@import': openSans,
  container: {
    maxWidth: "1024px",
    width: "100%",
    margin: "0 auto",
  },
  box: {
    border: {
      width: "1px",
      color: gray
    },
    padding: [["1.5em", "2.5em"]]
  },
  boxTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    padding: 0,
    margin: 0,
    color: yellow,
    position: "relative",
    "&:after": {
      content: "'+'",
      color: yellow,
      position: "absolute",
      top: "-.3em",
      font: {
        weight: "normal"
      }
    }
  },
  boxText: {
    textTransform: "uppercase",
    position: "relative",
    paddingLeft: "2em",
    "&:before": {
      content: "''",
      fontWeight: "lighter",
      background: "#777777",
      width: "1.6em",
      height: "1px",
      marginRight: ".4em",
      position: "absolute",
      top: "8px",
      left: 0
    }
  },
  seperator: {
    border: "1px solid #252525",
    backgroundColor: gray
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  education: {
    maxWidth: "1024px",
    width: "100%",
    margin: "0 auto",
    marginBottom: "4em"
  },
  educationFlex: {
    flex: 1,
    "& .box + .box": {
      marginTop: "3em"
    },
    "@media (min-width: 724px)": {
      flex: "0 0 50%"
    }
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 2em",
    "& .left": {
      marginBottom: "3em",
    },
    "@media (min-width: 724px)": {
      padding: 0,
      "& .left": {
        marginBottom: 0
      }
    }
  },
});

export default function About() {
  const classes = useStyle();

  return (
    <Layout title="About">
      <header className="flex justify-center py-20">
        <h1 className="text-white text-center text-6xl uppercase font-extrabold">
          About 
          <span className="text-yellow-500"> Me</span>
        </h1>
      </header>

      <div className={classes.container}>
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 justify-between">
          <div className="left text-white flex-1 pr-0 md:pr-10">
            <div className="head mb-6">
              <h2 className="uppercase text-2xl font-bold">Personal Infos</h2>
            </div>
            <div className="mid flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between mb-6 pr-10">
              <div className="flex flex-col space-y-4">
                <p>
                  <span className="text-gray-400">First Name :</span> Steve
                </p>
                <p>
                  <span className="text-gray-400">Last Name :</span> Milner
                </p>
                <p>
                  <span className="text-gray-400">Age :</span> 27 Years
                </p>
                <p>
                  <span className="text-gray-400">Nationality :</span> Tunisian
                </p>
                <p>
                  <span className="text-gray-400">Freelance :</span> Available
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <p>
                  <span className="text-gray-400">Address :</span> Tunis
                </p>
                <p>
                  <span className="text-gray-400">Phone :</span> +21621184010
                </p>
                <p>
                  <span className="text-gray-400">Email :</span> you@mail.com
                </p>
                <p>
                  <span className="text-gray-400">Skype :</span> steve.milner
                </p>
                <p>
                  <span className="text-gray-400">Languages :</span> French, English
                </p>
              </div>
            </div>
            <div className="button">
              <Button text="Download Cv" />
            </div>
          </div>

          <div className="right flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
              <div className={classes.box}>
                <h3 className={classes.boxTitle}>12</h3>
                <p className={classes.boxText}>years of experience</p>
              </div>
              <div className={classes.box}>
                <h3 className={classes.boxTitle}>97</h3>
                <p className={classes.boxText}>completed projects</p>
              </div>
              <div className={classes.box}>
                <h3 className={classes.boxTitle}>81</h3>
                <p className={classes.boxText}>happy customers</p>
              </div>
              <div className={classes.box}>
                <h3 className={classes.boxTitle}>53</h3>
                <p className={classes.boxText}>awards won</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <hr className={"mx-auto max-w-xl my-20 " + classes.seperator} />
      
      
      {/* Skills */}
      <div className={classes.container}>
      <header className="mb-10">
        <h3 className="text-white text-center uppercase text-3xl font-bold">My Skills</h3>
      </header>
        <div className={classes.flex}>
          <Skillbar lang="HTML" per="25" />
          <Skillbar per="89" />
          <Skillbar lang="css" per="70" />
          <Skillbar lang="php" per="66" />
          <Skillbar lang="wordpress" per="95" />
          <Skillbar lang="jquery" per="50" />
          <Skillbar lang="angular" per="65" />
          <Skillbar lang="react" per="45" />
        </div>
      </div>

      {/* Experience & Education */}
      <hr className={"mx-auto max-w-xl my-20 " + classes.seperator} />
      <div className={classes.education}>
        <header className="mb-10">
          <h3 className="text-white text-center uppercase text-3xl font-bold">Experience & Education</h3>
        </header>

        <div className={classes.row}>
          <div className={classes.educationFlex + " left"}>
            <Education />
            <Education date="2013 - 2018" job="UI/UX DESIGNER" brand="THEMEFOREST" />
            <Education date="2005 - 2013" job="CONSULTANT" brand="VIDEOHIVE" />
          </div>
          <div className={classes.educationFlex}>
            <Education date="2015" job="ENGINEERING DEGREE" brand="OXFORD UNIVERSITY" icon="edc" />
            <Education date="2012" job="MASTER DEGREE" brand="KIEV UNIVERSITY" icon="edc" />
            <Education date="2009" job="BACHELOR DEGREE" brand="TUNIS HIGH SCHOOL" icon="edc" />
          </div>
        </div>
      </div> 
      
    </Layout>
  );
}