import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import validAttr from "@emotion/is-prop-valid";

class Base extends React.Component {
  static propTypes = {
    styling: PropTypes.func,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    as: "div",
    styling: () => {}
  };

  elementType() {
    let elementType = this.props.as;

    if (this.props.href) {
      elementType = "a";
    }

    return elementType;
  }

  validProps(props, tag) {
    const filterProps = {};

    Object.keys(props).forEach(key => {
      if (validAttr(key)) {
        filterProps[key] = props[key];
      }
    });

    if (typeof tag === "string" || tag.name === "Link") return filterProps;

    return props;
  }

  render() {
    const { as, styling, ...rest } = this.props;

    const elementType = this.elementType();

    const Element = styled(({ tag = elementType, children, ...props }) => {
      const validProps = this.validProps(props, tag);

      return React.createElement(tag, validProps, children);
    })`
      ${props => styling(props)}
    `;

    return <Element {...rest}>{this.props.children}</Element>;
  }
}

export default Base;
