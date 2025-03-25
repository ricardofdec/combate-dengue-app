import { View, Text } from 'react-native';
import React from 'react';

export default function ExploreScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Como prevenir a Dengue</Text>
      <Text>• Elimine água parada.</Text>
      <Text>• Mantenha caixas d'água fechadas.</Text>
      <Text>• Limpe calhas e ralos com frequência.</Text>
      <Text>• Use repelente e roupas que cubram o corpo.</Text>
    </View>
  );
}
