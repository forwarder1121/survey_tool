import React, { Component } from "react";
import Typography from "@mui/material/Typography";
class Title extends Component {
  render() {
    const { title } = this.props;

    return <Typography variant="h5">{title}</Typography>;
  }
}

export default Title;
