import "../../App.css";
import { Container } from "@material-ui/core";
import Question from "./contents/Question";

const Content = () => {
  return (
    <Container>
      <Question titleOfQuestion="질문2번(바형식)" type="barType" />
      <Question titleOfQuestion="질문3번(블록형식)" type="blockType" />
      <Question titleOfQuestion="테스트[젠더]" type="genderType" />
      <Question titleOfQuestion="테스트[법적]" type="lawAgreeType" />
      <Question titleOfQuestion="테스트[별점]" type="starType" />
      <Question titleOfQuestion="테스트[예아니요]" type="yesNoType" />
      <Question titleOfQuestion="테스트[나이]" type="ageType" />
    </Container>
  );
};
export default Content;
