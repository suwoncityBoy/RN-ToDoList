import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Header() {
  return (
    <SafeAreaView>
      <StyleJs></StyleJs>
    </SafeAreaView>
  );
}

const StyleJs = styled.TouchableOpacity`
  width: 200px;
  height: 300px;
  background-color: red;
`;
