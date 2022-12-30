import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function App() {
  return (
    <SafeAreaView>
      <StyledView>
        <Text>ㅋㅋㅋㅋ</Text>
      </StyledView>
    </SafeAreaView>
  );
}

const StyledView = styled.View`
  flex: 1;
  margin-top: 10px;
`;
