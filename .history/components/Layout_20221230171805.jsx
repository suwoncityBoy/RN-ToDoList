import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";
import Header from "./Header";

export default function Layout() {
  return (
    <StyleLayout>
      <Header />
    </StyleLayout>
  );
}

const StyleLayout = styled.SafeAreaView`
  margin: 0 auto;
  width: 90%;
`;
