import React, { Component } from "react";
import Base from "../Base";

class Input extends React.Component {
  static defaultProps = {
    as: "input",
    type: "text",
    styling: props => {
      return props.theme.inputStyles;
    }
  };

  render() {
    const { as, children, disabled, type, ...rest } = this.props;

    return <Base as={as} type={type} {...rest} />;
  }
}

export default Input;
