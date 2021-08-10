import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const gray = "#252525";
const openSans = "url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap')";
const yellow = "#FFB400";

const useStyle = createUseStyles({
  '@import': openSans,
  resumeBox: {
    borderLeft: [[1, 'solid', gray]],
    padding: "0 2.5em",
    position: "relative"
  },
  date: {
    fontFamily: ["Open Sans", "sans-serif"],
    fontSize: ".7rem",
    fontWeight: "bolder",
    color: "#CFCFCF",
    background: gray,
    padding: [3, 10],
    borderRadius: "1em"
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "2.4em",
    height: "2.4em",
    backgroundColor: yellow,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(-50%, -10%)"
  }
});

export default function Education(props) {
  const classes = useStyle(props);

  const Icon = () => {
    if (props.icon === "exp") {
      return <>
        <FontAwesomeIcon icon={faBriefcase} />
      </>;
    } else {
      return (<FontAwesomeIcon icon={faGraduationCap} />);
    }
  };

  return (
    <div className={classes.resumeBox + " text-white box"}>
      <div className={classes.icon}>
        <Icon />
      </div>
      <span className={classes.date}>{props.date}</span>
      <h5 className="uppercase text-lg font-bold mt-4">
        {props.job} - <span className="text-gray-400">{props.brand}</span>
      </h5>
      <p className="mt-4 font-light">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
    </div>
  );
}

Education.defaultProps = {
  date: "2018 - PRESENT",
  job: "web developer",
  brand: "envato",
  icon: "exp"
}