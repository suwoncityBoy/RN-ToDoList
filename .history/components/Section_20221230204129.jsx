import styled from "@emotion/native";

export default function Section({ todos, categories }) {
  return (
    <StyleBodyWrap>
      {todos
        .filter((todo) => todo.categories === categories)
        .map((todo) => (
          <StyleContent key={todo.id}></StyleContent>
        ))}
    </StyleBodyWrap>
  );
}

const StyleBodyWrap = styled.ScrollView`
  width: 100%;
`;

const StyleContent = styled.View`
  background-color: #d9d9d9;
`;
