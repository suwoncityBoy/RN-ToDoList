import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <StyleHeaderWrap>
      <StyleHeaderButtonWrap>
        <StyleButton>
          <StyleText>Angular</StyleText>
        </StyleButton>
        <StyleButton>
          <StyleText>React</StyleText>
        </StyleButton>
        <StyleButton>
          <StyleText>Vue</StyleText>
        </StyleButton>
      </StyleHeaderButtonWrap>
      <StyleHeaderInputWrap>
        <StyleHeaderInputBox placeholder="Enter your task"></StyleHeaderInputBox>
      </StyleHeaderInputWrap>
    </StyleHeaderWrap>
  );
}

const StyleHeaderWrap = styled.View`
  width: 100%;
`;

const StyleHeaderButtonWrap = styled.View`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
  justify-content: space-between;
`;

const StyleButton = styled.TouchableOpacity`
  background-color: gray;
  width: 30%;
  align-items: center;
`;

const StyleText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const StyleHeaderInputWrap = styled.View`
  width: 100%;
`;

const StyleHeaderInputBox = styled.TextInput`
  width: 100%;
  align-items: center;
  border: 1px solid #000;
  /* padding-bottom: 20px;
  border-bottom-width: 2px; */
`;
