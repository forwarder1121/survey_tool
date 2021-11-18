import React,{Component} from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
class BarType extends Component{

    render(){
        return(
            <Box sx={{ width: 300 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center">
                    <SentimentVeryDissatisfiedIcon/>
                    
                    <Slider aria-label="Volume"/>
                    <SentimentVerySatisfiedIcon />
                    
                </Stack>
             </Box>
        )
    }
}

export default BarType