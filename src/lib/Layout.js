import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

export default function Layout({ children, title }) {
  document.title = title;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired
}