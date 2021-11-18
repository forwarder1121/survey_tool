import React,{Component} from "react";
import Checkbox from '@material-ui/core/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class LawAgreeType extends Component{

  render(){
      return(
        <div>
      법적인 내용 .....동의하십니까?
      <br></br>
      <Checkbox {...label} defaultChecked />
    </div>
      );
  }
}

export default LawAgreeType;
