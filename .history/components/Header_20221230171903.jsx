import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <StyleHeaderWrap>
      <StyleButton>
        <Text>js</Text>
      </StyleButton>
    </StyleHeaderWrap>
  );
}

const StyleHeaderWrap = styled.View`
  flex-direction: row;
  width: 100%;
`;

const StyleButton = styled.TouchableOpacity`
  background-color: "#0FBCF9";
  width: 30%;
  align-items: center;
`;
