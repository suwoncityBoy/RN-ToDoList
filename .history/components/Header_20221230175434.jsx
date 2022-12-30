import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header({ text, categories }) {
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
  margin: 60px 0 30px 0;
  align-items: center;
  justify-content: space-between;
`;

const StyleButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #000;
  width: 30%;
  align-items: center;
`;

const StyleText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const StyleHeaderInputWrap = styled.View`
  width: 100%;
`;

const StyleHeaderInputBox = styled.TextInput`
  padding-left: 10px;
  width: 100%;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
`;
