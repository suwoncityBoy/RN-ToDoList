import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "@emotion/native";
import Header from "./Header";
import { useState } from "react";

export default function Layout() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState("Angular");

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
