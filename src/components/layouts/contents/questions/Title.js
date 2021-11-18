import React, { Component } from "react";
import Typography from '@mui/material/Typography';
class Title extends Component{
    
    render(){
      
      const{titleOfQuestion}=this.props;
      
      return(
        <Typography variant="h5" >
          {titleOfQuestion}
        </Typography>
      )
    }
  }

  export default Title;