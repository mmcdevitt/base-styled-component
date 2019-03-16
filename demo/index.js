import React from "react";
import ReactDOM from "react-dom";
import styled, {
  css,
  ThemeProvider,
  createGlobalStyle
} from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import Base, { Button, Heading, Input } from "../src";
import reset, { normalize } from "react-style-reset";

import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight
} from "styled-system";

const Section = styled.div`
  margin-bottom: 15px;
`;

const textStyling = props => css`
  color: red;
`;

function getSize({ theme, fontSize }) {
  const { fontSizes } = theme;

  if (typeof fontSize === "string") return fontSize;

  return (
    (fontSizes.length - 1 >= fontSize ? fontSizes[fontSize] : fontSize) + "px"
  );
}

function style(props) {
  if (!props.theme.fontSizes) {
    console.warn(
      "Font sizes have not been declared. Defaulting to browser defaults."
    );
  }

  return props.theme.fontSizes && `font-size: ${getSize(props)}`;
}

const headingStyles = props => css`
  ${style}
`;

const theme = {
  buttonStyles: props => css`
    background: red;
  `,
  fontSizes: [12, 14, 16, 24, 36, 48],
  queries: [1200, 960, 788],
  global: {
    fontSize: "10px"
  },
  headingStyles
};

const Global = createGlobalStyle`
  ${normalize}
  html, body {
    box-sizing: border-box;
    font-size: ${props => props.theme.global.fontSize}
  }
  
`;

class Form extends React.Component {
  static defaultProps = {
    as: "form",
    styling: props => {
      return props.theme.inputStyles;
    }
  };

  static Input = Input;
  static Button = Button;

  render() {
    const { as, children, disabled, type, ...rest } = this.props;

    return (
      <Base as={as} type={type} {...rest}>
        {children}
      </Base>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Global custom={{}} />
            <Section>
              <Base as="button">Base as button</Base>
              <Button>Basic Button</Button>
            </Section>
            <Section>
              <Heading>Heading 1</Heading>
              <Heading as="h2">Heading 1</Heading>
              <Heading as="h3">Heading 1</Heading>
              <Heading as="h4">Heading 1</Heading>
              <Heading as="h5">Heading 1</Heading>
              <Heading as="h6">Heading 1</Heading>
            </Section>
            <Section>
              <Form>
                <Form.Input />
                <Form.Button>Submit</Form.Button>
              </Form>
            </Section>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
