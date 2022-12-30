import styled from "@emotion/native";

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
