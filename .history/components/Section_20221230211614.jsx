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
                <TouchableOpacity>
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
