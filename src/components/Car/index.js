import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

export default function Car({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: 200
        }}
        source={{
          uri: item.url
        }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.carTextName}>{item.name}</Text>

        <TouchableOpacity style={styles.carButton}>
          <MaterialIcons name="add-shopping-cart" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}