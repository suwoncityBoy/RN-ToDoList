import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Header />;
    </SafeAreaView>
  );
}
