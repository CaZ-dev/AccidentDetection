import { Center } from "@chakra-ui/react";
import React from "react";
import designer from "../assets/designer.gif";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={designer} alt="Designer" />
        <h1>Made by Abhinav and Agam for the safety of the citizens</h1>
      </div>
    </>
  );
};

export default About;
