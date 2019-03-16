import React from "react";
import Base from "../Base";

class Text extends React.Component {
  static defaultProps = {
    as: "span"
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

export default Text;
