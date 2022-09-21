import React from "react";
import classes from "./Baner.module.css";
import Container from "react-bootstrap/Container";
const Baner = () => {
  return (
    <Container className={classes.backgroundImg}>
      <img
        src="https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?size=626&ext=jpg&ga=GA1.2.594929802.1662414653"
        alt="banerImg"
      />
    </Container>
  );
};

export default Baner;
