import { FlatList, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/search';
import Add from './components/Add';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  const select = (id) => {
    setSelectedId(id);
  }


  return (
    <SafeAreaView>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} />
      <FlatList
        data={items} 
        keyExtractor={item => item.id}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row person={item} selectedId={selectedId} select={select}/>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};