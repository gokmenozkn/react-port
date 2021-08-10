import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  btn: {
    textTransform: "uppercase",
    border: {
      width: "1px",
      color: "#FFB400",
      radius: "1.5em"
    },
    fontWeight: "bold",
    padding: ".8em 2em",
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
  }
});

export default function Button({ text }) {
  const classes = useStyle();

  return (
    <button className={classes.btn}>
      {text}
    </button>
  );
}