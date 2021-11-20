import React from "react";
import AssayType from "./questions/AssayType";
import BarType from "./questions/BarType";
import BlockType from "./questions/BlockType";
import GenderType from "./questions/GenderType";
import LawAgreeType from "./questions/LawAgreeType";
import StarType from "./questions/StarType";
import YesNoType from "./questions/YesNoType";
import AgeType from "./questions/AgeType";
import Title from "./questions/Title";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NextButton from "./buttons/NextButton";
import PreviousButton from "./buttons/PreviousButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Question = props => {
  const { titleOfQuestion, type } = props;

  if (type === "assayType") {
    return (
      <Card variant="outlined">
        <CardContent>
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
          <Title titleOfQuestion={titleOfQuestion} />
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
};

export default Question;
