import "../../App.css";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Question from "./contents/Question";

const Content = () => {
  //questions은 사용할 모든 문항에 대한 정보를 가져야합니다.
  //ps. blocktype은 따로 구현필요함, value값을 받아오는것도 구현해야함

  //남은 type:이미지 선택형, 격자형, 드롭다운, 폐쇠형
  const [questions, setQuestions] = useState({
    0: { id: "0", type: "noticeType", title: "중간화면" },
    1: { id: "1", type: "barType", title: "척도형" },
    2: { id: "2", type: "blockType", title: "일반객관식" },
    3: { id: "3", type: "genderType", title: "젠더형식" },
    4: { id: "4", type: "lawAgreeType", title: "동의형식" },
    5: { id: "5", type: "starType", title: "별점형" },
    6: { id: "6", type: "yesNoType", title: "동의거부형식" },
    7: { id: "7", type: "ageType", title: "나이형식" },
    8: { id: "8", type: "uploadType", title: "업로드형식" },
    9: { id: "9", type: "tableType", title: "격자형식" },
  });

  return (
    <Container>
      {Object.values(questions).map(item => (
        <Question key={item.id} type={item.type} title={item.title} />
      ))}
    </Container>
  );
};
export default Content;
