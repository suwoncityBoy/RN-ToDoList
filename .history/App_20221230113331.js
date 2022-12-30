import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";

export default function App() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}
