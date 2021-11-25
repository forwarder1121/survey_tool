import React from "react";
import AssayType from "./questions/AssayType";
import BarType from "./questions/BarType";
import BlockType from "./questions/BlockType";
import GenderType from "./questions/GenderType";
import LawAgreeType from "./questions/LawAgreeType";
import StarType from "./questions/StarType";
import YesNoType from "./questions/YesNoType";
import AgeType from "./questions/AgeType";
import NoticeType from "./questions/NoticeType";
import Title from "./questions/Title";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NextButton from "./buttons/NextButton";
import PreviousButton from "./buttons/PreviousButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Question = props => {
  const { title, type } = props;

  if (type === "assayType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <AssayType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }
  if (type === "barType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <BarType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "blockType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <BlockType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "genderType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <GenderType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "lawAgreeType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <LawAgreeType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "starType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <StarType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }
  if (type === "yesNoType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <YesNoType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "ageType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <AgeType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }

  if (type === "noticeType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title title={title} />
          <NoticeType />
        </CardContent>
        <Divider />
        <Stack spacing={2} direction="row" className="lowerButtons">
          <PreviousButton />
          <NextButton />
        </Stack>
      </Card>
    );
  }
};

export default Question;
