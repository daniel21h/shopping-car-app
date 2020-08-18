import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Item({ item, removeItemCart }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.description}>
        <Text style={styles.title}>Nome do carro</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => removeItemCart(item)}>
        <MaterialIcons name="remove-shopping-cart" size={24} color="#ff0000" />
      </TouchableOpacity>
    </View>
  )
}