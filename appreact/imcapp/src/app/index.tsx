import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/title";
import Form from "../components/form";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Title/>      
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5E5',
    paddingTop: 80
  }
})
