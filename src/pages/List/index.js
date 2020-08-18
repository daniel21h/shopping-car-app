import React from 'react';
import { View, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import Car from '../../components/Car';

import styles from './styles'

export default function List() {
  const cars = useSelector(state => state.cars);

  return (
    <FlatList 
      style={{ padding: 24 }}
      showsHorizontalScrollIndicator={false}
      data={cars}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Car item={item} />}
    />
  )
}