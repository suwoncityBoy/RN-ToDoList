import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <StyleHeaderWrap>
      <StyleHeaderButtonWrap>
        <StyleButton>
          <StyleText>js</StyleText>
        </StyleButton>
        <StyleButton>
          <StyleText>js</StyleText>
        </StyleButton>
        <StyleButton>
          <StyleText>js</StyleText>
        </StyleButton>
      </StyleHeaderButtonWrap>
    </StyleHeaderWrap>
  );
}

const StyleHeaderWrap = styled.View`
  width: 100%;
  background-color: red;
`;

const StyleHeaderButtonWrap = styled.View`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
  justify-content: space-between;
  background-color: red;
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
