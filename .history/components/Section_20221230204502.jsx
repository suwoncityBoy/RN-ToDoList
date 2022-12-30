import styled from "@emotion/native";

export default function Section({ todos, categories }) {
  return (
    <StyleBodyWrap>
      {todos.map((todo) => {
        if (category === todo.category) {
          return <StyleContent key={todo.id}></StyleContent>;
        }
      })}
    </StyleBodyWrap>
  );
}

const StyleBodyWrap = styled.ScrollView`
  width: 100%;
`;

const StyleContent = styled.View`
  background-color: #d9d9d9;
`;
