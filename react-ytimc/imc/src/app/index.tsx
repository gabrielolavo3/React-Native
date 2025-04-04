import React from "react";
import { View, StyleSheet } from "react-native";
import Titulo from "../components/titulo";
import Form from "../components/form";

export default function App() {
  return (
    <View style = {style.container}>
      <Titulo/>
      <Form/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5E05',
    paddingTop: 80
  }
})