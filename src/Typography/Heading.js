import React, { Component } from "react";
import PropTypes from "prop-types";
import Base from "../Base";

class Heading extends React.Component {
  static propTypes = {
    as: PropTypes.string
  };

  static defaultProps = {
    as: "h1",
    styling: props => props.theme.headingStyles
  };

  render() {
    const { as, children, ...rest } = this.props;

    const sizes = {
      h1: 5,
      h2: 4,
      h3: 3,
      h4: 2,
      h5: 1,
      h6: 0
    };

    return (
      <Base as={as} fontSize={sizes[as]} {...rest}>
        {children}
      </Base>
    );
  }
}

export default Heading;
