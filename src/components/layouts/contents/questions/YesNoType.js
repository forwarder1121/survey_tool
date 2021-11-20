import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class YesNoType extends Component {
  render() {
    return (
      <div>
        질문: 예,아니요로 대답해주세요
        <ul>
          <Button variant="contained">예</Button>
          <Button variant="contained">아니요</Button>
        </ul>
      </div>
    );
  }
}

export default YesNoType;
