import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <SafeAreaView>
      <StyleWrap>
        <StyleJs>
          <Text>JavaScript</Text>
        </StyleJs>
      </StyleWrap>
    </SafeAreaView>
  );
}

const StyleWrap = styled.View`
  margin: 0 auto;
  width: 90%;
  background-color: blue;
`;

const StyleJs = styled.TouchableOpacity`
  width: 200px;
  height: 300px;
  background-color: red;
`;
