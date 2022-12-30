import styled from "@emotion/native";
import SectionContent from "./SectionContent";

export default function Section({ todos, categories }) {
  return (
    <StyleBodyWrap>
      {todos
        .filter((todo) => todo.categories === categories)
        .map((todo) => (
          <SectionContent></SectionContent>
        ))}
    </StyleBodyWrap>
  );
}

const StyleBodyWrap = styled.ScrollView`
  width: 100%;
`;
