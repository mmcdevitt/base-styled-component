import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

const Section = styled.div`
  margin-bottom: 15px;
`;

import Base from "../src/Base";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Section>
            <Base.Button>Basic Button</Base.Button>
          </Section>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
