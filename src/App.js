import React from "react";
import { FullPage, Slide } from "react-full-page";

import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";

import "./App.css";

const App = () => {
  return (
    <>
      <FullPage>
        <Slide
          className="back-image"
          style={{
            backgroundImage: `url(${one})`,
          }}
        >
          <h1 className="title">Section One</h1>
        </Slide>
        <Slide
          className="back-image"
          style={{
            backgroundImage: `url(${two})`,
          }}
        >
          <h1 className="title">Section Two</h1>
        </Slide>
        <Slide
          className="back-image"
          style={{
            backgroundImage: `url(${three})`,
          }}
        >
          <h1 className="title">Section Three</h1>
        </Slide>
      </FullPage>
    </>
  );
};

export default App;
