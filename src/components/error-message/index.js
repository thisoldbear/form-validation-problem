import React, { PureComponent } from "react";

export default class StyledErrorMessage extends PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}
