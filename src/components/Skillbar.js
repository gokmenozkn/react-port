import { createUseStyles } from "react-jss";

const yellow = "#FFB400";
const gray = "#252525";

const useStyle = createUseStyles({
  skill: {
    // width: "100%",
    padding: "1em 0",
    flex: 1,
    "@media (min-width: 724px)": {
      flex: "0 0 46%",
    }
  },
  title: {
    color: "#FFFFFF",
    marginBottom: "1em",
    display: "flex",
    justifyContent: "space-between"
  },
  bar: {
    backgroundColor: gray,
    height: "8px",
    width: "100%",
    position: "relative",
    borderRadius: "5px",
    zIndex: 1,
    "&:before": {
      content: "''",
      width: (props) => props.per + "%",
      backgroundColor: yellow,
      borderRadius: "inherit",
      height: "8px",
      zIndex: -1,
      position: "absolute",
      left: 0,
      animation: '$load 2s 0s'
    }
  },
  '@keyframes load': {
    from: {
      width: "0%"
    }
  },
  lang: {
    fontSize: "1.3rem",
    textTransform: "uppercase"
  },
  per: {
    fontSize: "1.3rem"
  }
});

export default function Skillbar(props) {
  const classes = useStyle(props);

  return (
    <div className={classes.skill}>
      <div className={classes.title}>
        <h4 className={classes.lang}>{props.lang}</h4>
        <h4 className={classes.per}>{props.per}%</h4>
      </div>
      <div className={classes.bar}></div>
    </div>
  );
}

Skillbar.defaultProps = {
  lang: "Javascript",
  per: 80
}