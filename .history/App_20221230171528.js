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
import Layout from "./components/Layout";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Layout />
    </SafeAreaView>
  );
}
