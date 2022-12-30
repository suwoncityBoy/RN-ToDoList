import styled from "@emotion/native";

export default function Section({ todos, categories }) {
  return (
    <StyleBodyWrap>
      {todos.map((todo) => {
        if (categories === todo.categories) {
          return <StyleContentWrap key={todo.id}></StyleContentWrap>;
        }
      })}
    </StyleBodyWrap>
  );
}

const StyleBodyWrap = styled.ScrollView`
  width: 100%;
`;

const StyleContentWrap = styled.View`
  width: 100%;
  align-items: center;
  background-color: #d9d9d9;
`;
