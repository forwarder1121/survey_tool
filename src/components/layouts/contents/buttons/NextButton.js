import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';


const NextButton=()=>{
    const _onClick=()=>alert("다음 버튼이 눌렷습니다.");
    return(
        <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={_onClick}>
            다음
        </Button>
    )
}

export default NextButton;