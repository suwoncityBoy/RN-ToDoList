import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <StyleLayout>
        <Text>hi</Text>
      </StyleLayout>
    </SafeAreaView>
  );
}

const StyleLayout = styled.View`
  flex: 1;
  width: 90%;
  margin: auto 0;
`;
