
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                style={styles.searchInput}
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30, 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        backgroundColor: '#f0f0f0', 
        borderRadius: 20, 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    searchInput: {
        borderColor: '#666', 
        borderWidth: 1,
        backgroundColor: '#fff', 
        borderRadius: 15, 
        padding: 10, 
    }
});
