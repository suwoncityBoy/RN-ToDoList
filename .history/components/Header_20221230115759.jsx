import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <SafeAreaView>
      <StyleWrap>
        <StyleButton>
          <Text>js</Text>
        </StyleButton>
      </StyleWrap>
    </SafeAreaView>
  );
}

const StyleWrap = styled.View`
  flex-direction: row;
`;

const StyleButton = styled.TouchableOpacity`
  background-color: "#0FBCF9";
  width: 30%;
  align-items: center;
`;
