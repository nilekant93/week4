import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/search';
import Add from './components/Add';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@persons_Key';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const select = (id) => {
    setSelectedId(id);
  };

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem(STORAGE_KEY);
      let json = JSON.parse(value);
      if (json === null) {
        json = [];
      }
      console.log(json);
      setItems(json);
    } catch (ex) {
      console.log(ex);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    // AsyncStorage.clear();
    // setItems(DATA);
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Search executeSearch={executeSearch} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          extraData={selectedId}
          renderItem={({ item }) => (
            <Row person={item} selectedId={selectedId} select={select} />
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <Add items={items} setItems={setItems} storeData={storeData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#f0f2f5', // A light grey that's easy on the eyes
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footerContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc', // A subtle border to visually separate the add section
  },
});
