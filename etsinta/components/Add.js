import { Button, TextInput, View,StyleSheet } from "react-native";
import React, { useState } from "react";


export default function Add({ items, setItems }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            firstname: firstname,
            lastname: lastname,
        }
        const updatedItems = [...items, newPerson];
        setItems(updatedItems);
        setFirstname('');
        setLastname('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={firstname}
                onChangeText={text => setFirstname(text)}
                placeholder="Enter firstname..."
            />
            <TextInput
                value={lastname}
                onChangeText={text => setLastname(text)}
                placeholder="Enter lastname..."
            />
            <Button title="Save" onPress={save} />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 8,
        borderRadius: 4,
    },
});
