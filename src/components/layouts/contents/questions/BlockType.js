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
  const [choices, setChoices] = useState({});

  const _addChoice = () => {
    const ID = Object.keys(choices).length;
    const newChoiceObject = {
      [ID]: {
        id: ID,
        title: ID + "번 선지",
        subtitle: ID + "번 선지 설명",
        isSelected: false,
      },
    };
    setChoices({ ...choices, ...newChoiceObject });
  };

  const _onChoose = item => {
    const currentChoices = Object.assign({}, choices);
    for (var i = 0; i < Object.keys(choices).length; i++) {
      choices[i].isSelected = false;
    }
    currentChoices[item.id].isSelected = true;
    setChoices(currentChoices);
  };

  return (
    <Grid container spacing={2}>
      {Object.values(choices).map(item => (
        <Grid item key={item.id}>
          <Block
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            item={item}
            onChoose={_onChoose}
            isSelected={item.isSelected}
          />
        </Grid>
      ))}
      <Grid item>
        <AddBlock onClick={_addChoice} />
      </Grid>
    </Grid>
  );
};

const Block = ({ title, subtitle, onChoose, item, isSelected }) => {
  const _onClick = () => {
    onChoose(item);
  };
  return (
    <Card
      sx={{ maxWidth: 250 }}
      style={{ background: isSelected ? "green" : "none" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={_onClick}>
          선택
        </Button>
      </CardActions>
    </Card>
  );
};

//Block 선지를 추가하는 컴포넌트
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
