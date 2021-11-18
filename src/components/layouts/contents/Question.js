import React, { Component } from "react";
import AssayType from "./questions/AssayType";
import BarType from "./questions/BarType";
import BlockType from "./questions/BlockType";
import GenderType from "./questions/GenderType";
import LawAgreeType from "./questions/LawAgreeType";
import StarType from "./questions/StarType";
import YesNoType from "./questions/YesNoType";
import AgeType from "./questions/AgeType";
import Title from "./questions/Title";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


class Question extends Component{
    
    render(){
        const{titleOfQuestion,type}=this.props;
        
        if(type==="assayType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <AssayType/>
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                   
                </Card>
            )
        }
        if(type==="barType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <BarType/>     
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="blockType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <BlockType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="genderType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <GenderType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="lawAgreeType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <LawAgreeType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="starType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <StarType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }
        if(type==="yesNoType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <YesNoType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="ageType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <AgeType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }
    }
  }

  export default Question;