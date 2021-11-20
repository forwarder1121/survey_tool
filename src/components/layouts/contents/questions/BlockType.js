import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const BlockType = () => {
  const _onClick = () => alert("추가 버튼이 눌렸습니다.");
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Block title="1번선지" subtitle="1번선지에 대한 설명" />
      </Grid>
      <Grid item>
        <Block title="2번선지" subtitle="2번선지에 대한 설명" />
      </Grid>
      <Grid item>
        <Block title="3번선지" subtitle="3번선지에 대한 설명" />
      </Grid>
      <Grid item>
        <Block title="4번선지" subtitle="4번선지에 대한 설명" />
      </Grid>
      <Grid item>
        <AddBlock onClick={_onClick} />
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
