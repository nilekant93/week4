import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

export default function Add({items,setItems, storeData}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastname,
            firstname: firstname,
        }
        const tempItems = [...items,newPerson]
        storeData(tempItems)
        setItems(tempItems)
        setFirstname('')
        setLastname('')
    }

    return(
        <View style={styles.container}>
            <TextInput
            value={firstname}
            onChangeText={text => setFirstname(text)}
            placeholder="Firstname..."
        />
        <TextInput
            value={lastname}
            onChangeText={text => setLastname(text)}
            placeholder="Lastname..."
        />
            <Button title='Save' onPress={save} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
      backgroundColor: '#eaeaea',
      borderRadius: 8,
      marginVertical: 5,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      elevation: 3,
    },
  });