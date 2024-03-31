import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Row({person, selectedId, select}) {
    const backgroundColor = person.id === selectedId ? "#c0c0c0" : "#f5f5f5";

    return (
        <Pressable onPress={() => select(person.id)}>
            <Text 
            style={[style.row,{backgroundColor}]}>
            {person.lastname}, {person.firstname
        }</Text>
        </Pressable>
    );
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      paddingHorizontal: 20, 
      paddingTop: 20,
      paddingBottom: 10, 
      alignItems: 'stretch', 
      justifyContent: 'flex-start', 
    },
    row: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 20, 
      paddingHorizontal: 15, 
      marginBottom: 10, 
      borderWidth: 1, 
      borderColor: '#E0E0E0', 
      borderRadius: 10, 
      shadowColor: "#000", 
      shadowOffset: {
        width: 0,
        height: 2, 
      },
      shadowOpacity: 0.1, 
      shadowRadius: 3.84, 
      elevation: 5, 
    },
  });