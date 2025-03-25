import { View, Text, FlatList } from 'react-native';
import React from 'react';

const news = [
  { id: '1', title: 'Casos aumentam na região norte', date: '25/03/2025' },
  { id: '2', title: 'Prefeitura promove mutirão contra a dengue', date: '24/03/2025' },
];

export default function HomeScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Últimas Notícias</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

