import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  return (
    <SafeAreaView>
      <Layout />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
