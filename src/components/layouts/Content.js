import "../../App.css";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Question from "./contents/Question";

const Content = () => {
  //questions은 사용할 모든 문항에 대한 정보를 가져야합니다.
  //ps. blocktype은 따로 구현필요함, value값을 받아오는것도 구현해야함
  const [questions, setQuestions] = useState({
    0: { id: "0", type: "noticeType", title: "공지형식" },
    1: { id: "1", type: "barType", title: "바형식" },
    2: { id: "2", type: "blockType", title: "블록형식" },
    3: { id: "3", type: "genderType", title: "젠더형식" },
    4: { id: "4", type: "lawAgreeType", title: "동의형식" },
    5: { id: "5", type: "starType", title: "별점형식" },
    6: { id: "6", type: "yesNoType", title: "동의거부형식" },
    7: { id: "7", type: "ageType", title: "나이형식" },
    8: { id: "8", type: "uploadType", title: "업로드형식" },
  });

  return (
    <Container>
      {numberOfTotalQuestons}
      {Object.values(questions).map(item => (
        <Question key={item.id} type={item.type} title={item.title} />
      ))}
    </Container>
  );
};
export default Content;
