import styled from "@emotion/native";
import Header from "./Header";
import Section from "./Section";
import { useState } from "react";

export default function Layout() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState("Angular");

  return (
    <StyleLayout>
      <Header
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
        categories={categories}
        setCategories={setCategories}
      />
      <Section />
    </StyleLayout>
  );
}

const StyleLayout = styled.SafeAreaView`
  margin: 0 auto;
  width: 90%;
`;
