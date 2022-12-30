import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";
import Layout from "./components/Layout";
import Header from "./components/Header";

export default function App() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}
