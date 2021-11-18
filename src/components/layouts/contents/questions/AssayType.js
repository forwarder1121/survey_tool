import React, { Component } from 'react';
import TextField from '@material-ui/core//TextField';
class AssayType extends Component {
  state = {
    name: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField id="outlined-search" label="내 답변" type="search" />
       
      </form>
    );
  }
}

export default AssayType;