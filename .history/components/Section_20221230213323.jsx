import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

export default function Section({ todos, categories, setTodos }) {
  const setDone = (id) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx].isDone = !newTodos[idx].isDone;
    setTodos(newTodos);
  };

  return (
    <StyleBodyWrap>
      {todos.map((todo) => {
        if (categories === todo.categories) {
          return (
            <StyleContentWrap key={todo.id}>
              <StyleContentElements>
                <StyleContentWrap>
                  <Text
                    style={{
                      textDecorationLine: todo.isDone ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </Text>
                </StyleContentWrap>
                <StyleContentWrap>
                  <TouchableOpacity
                    onPress={() => {
                      setDone(todo.id);
                    }}
                  >
                    <AntDesign name="checksquare" size={24} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      style={{ marginLeft: 10 }}
                      name="edit"
                      size={24}
                      color="#000"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign
                      style={{ marginLeft: 10 }}
                      name="delete"
                      size={24}
                      color="#000"
                    />
                  </TouchableOpacity>
                </StyleContentWrap>
              </StyleContentElements>
            </StyleContentWrap>
          );
        }
      })}
    </StyleBodyWrap>
  );
}

const StyleBodyWrap = styled.ScrollView`
  width: 100%;
`;

const StyleContentWrap = styled.View`
  align-items: center;
`;

const StyleContentElements = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
`;
