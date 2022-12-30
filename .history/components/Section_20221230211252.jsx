import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Section({ todos, categories }) {
  return (
    <StyleBodyWrap>
      {todos.map((todo) => {
        if (categories === todo.categories) {
          return (
            <StyleContentWrap key={todo.id}>
              <StyleContentElements>
                <StyleTouchableOpacity>
                  <AntDesign name="checksquare" size={24} color="black" />
                </StyleTouchableOpacity>
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
  width: 100%;
  align-items: center;
`;

const StyleContentElements = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;

const StyleTouchableOpacity = styled.TouchableOpacity``;
