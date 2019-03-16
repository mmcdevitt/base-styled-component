import React from "react";
import PropTypes from "prop-types";

import Base from "../Base";
import Button from "../Button";

class Paragraph extends React.Component {
  static propTypes = {
    ...Base.propTypes
  };

  static defaultProps = {
    as: "p"
  };

  render() {
    const { as, children, ...rest } = this.props;

    return (
      <Base as={as} {...rest}>
        {children}
      </Base>
    );
  }
}

export default Paragraph;
