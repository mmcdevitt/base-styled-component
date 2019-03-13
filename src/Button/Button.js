import React from "react";
import Base from "../Base";

class Button extends React.Component {
  static defaultProps = {
    as: "button"
  };

  render() {
    const { as, children, disabled, ...rest } = this.props;

    return (
      <Base
        as={as}
        disabled={(disabled && this.props.as === "button") || undefined}
        {...rest}
      >
        {children}
      </Base>
    );
  }
}

export default Button;
