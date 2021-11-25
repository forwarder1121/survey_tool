import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const BlockType = () => {
  //choices는 blocktype에서 사용될 모든 선지에 대한 정보를 나타냅니다.

  const [choices, setChoices] = useState({
    1: { id: "1", title: "1번 선지", subtitle: "1번 선지 설명" },
  });
  const _addChoice = () => {
    const ID = Object.keys(choices).length + 1;
    const newChoiceObject = {
      [ID]: {
        id: ID,
        title: ID + "번 선지",
        subtitle: ID + "번 선지 설명",
      },
    };
    setChoices({ ...choices, ...newChoiceObject });
  };
  return (
    <Grid container spacing={2}>
      {Object.values(choices).map(item => (
        <Grid item>
          <Block title={item.title} subtitle={item.subtitle} />
        </Grid>
      ))}
      <Grid item>
        <AddBlock onClick={_addChoice} />
      </Grid>
    </Grid>
  );
};

const Block = props => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">선택</Button>
      </CardActions>
    </Card>
  );
};

const AddBlock = props => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActions>
        <Button size="small" onClick={props.onClick}>
          추가
        </Button>
      </CardActions>
    </Card>
  );
};
export default BlockType;
