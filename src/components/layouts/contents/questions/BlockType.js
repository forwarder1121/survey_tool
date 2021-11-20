import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const BlockType = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card sx={{ maxWidth: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              [1번 선지]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              여기는 1번선지에 대한 설명을 포함합니다. 이렇게 저렇게
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">선택</Button>
            <Button size="small">자세히 보기</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              [2번 선지]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              여기는 2번선지에 대한 설명을 포함합니다. 이렇게 저렇게
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">선택</Button>
            <Button size="small">자세히 보기</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              [3번 선지]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              여기는 3번선지에 대한 설명을 포함합니다. 이렇게 저렇게
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">선택</Button>
            <Button size="small">자세히 보기</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              [4번 선지]
            </Typography>
            <Typography variant="body2" color="text.secondary">
              여기는 4번선지에 대한 설명을 포함합니다. 이렇게 저렇게
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">선택</Button>
            <Button size="small">자세히 보기</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BlockType;
