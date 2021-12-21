import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const TableType = () => {
  const [colInfo, setColInfo] = useState({
    0: { id: "0", title: "null" },
    1: { id: "1", title: "col1" },
  });
  const [rowInfo, setRowInfo] = useState({
    0: { id: "1", title: "문제0" },
  });

  const _addCol = () => {
    const ID = Object.keys(colInfo).length;
    const newColObject = {
      [ID]: {
        id: ID,
        title: "col" + ID,
      },
    };
    setColInfo({ ...colInfo, ...newColObject });
  };
  const _addRow = () => {
    const ID = Object.keys(rowInfo).length;
    const newRowObject = {
      [ID]: {
        id: ID,
        title: "문제" + ID,
      },
    };
    setRowInfo({ ...rowInfo, ...newRowObject });
  };
  return (
    <Card>
      <Grid container spacing={2}>
        {Object.values(colInfo).map(item => (
          <Grid item key={item.id} xs={2}>
            <Block id={item.id} title={item.title} />
            <Button style={{ width: 170, background: "#c1c423" }} />
          </Grid>
        ))}
        <Grid item xs={1}>
          <AddBlock onClick={_addCol} />
        </Grid>
      </Grid>
      {Object.values(rowInfo).map(item => (
        <RowComponent
          key={item.id}
          titleOfRow={item.title}
          col={Object.keys(colInfo).length}
        />
      ))}
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <AddBlock onClick={_addRow} />
          </Grid>
        </Grid>
      </Card>
    </Card>
  );
};

//한 행을 담당하는 컴포넌트
const RowComponent = ({ titleOfRow, col }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const _selectOption = num => {
    setSelectedOption(num);
  };

  const renderOption = () => {
    const result = [];
    for (let i = 1; i < col; i++) {
      //만약 i==selectedOption이라면 background:red
      result.push(
        <Grid item key={i} xs={2}>
          <Block
            title={i + "번"}
            selectOption={_selectOption}
            num={i}
            isSelected={i === selectedOption ? true : false}
          />
        </Grid>
      );
    }
    return result;
  };
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Block title={titleOfRow} />
          <Button style={{ width: 170, background: "#c1c423" }} />
        </Grid>
        {renderOption()}
      </Grid>
    </Card>
  );
};

const Block = ({ title, selectOption, num, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const _onClick = () => {
    selectOption(num);
  };
  const _handleMouseHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Card
      xs={1}
      onClick={_onClick}
      onMouseEnter={_handleMouseHover}
      onMouseLeave={_handleMouseHover}
      style={{ background: isSelected ? "#21da3f" : "none" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

//Block 선지를 추가하는 컴포넌트
const AddBlock = props => {
  return (
    <Card xs={1}>
      <CardActions>
        <Button size="small" onClick={props.onClick}>
          추가
        </Button>
      </CardActions>
    </Card>
  );
};

export default TableType;
