import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Layout from "./components/Layout";

export default function App() {
  return (
    <SafeAreaView>
      <Layout />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
