import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function Layout({ children }) {
  return <StyleLayout>{children}</StyleLayout>;
}

const StyleLayout = styled.SafeAreaView`
  display: flex;
  margin: 0 auto;
  width: 90%;
  background-color: red;
`;
