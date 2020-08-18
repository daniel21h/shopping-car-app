import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import Add from '../pages/Add';
import List from '../pages/List';
import Cart from '../pages/Cart';

import Bagde from '../components/Badge';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabHomeNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          paddingVertical: 4,
          backgroundColor: '#03a9f4',
          paddingBottom: 6,
          height: 64,
        },
        inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        activeTintColor: '#fff',
        labelStyle: {
          fontSize: 14,
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="directions-car" size={24} color={color} />
        }}
        name="Carros"
        component={List}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="directions-car" size={24} color={color} />
        }}
        name="Adicionar"
        component={Add}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <MaterialIcons name="add" size={24} color={color} />
              <Bagde />
            </View>
          )
        }}
        name="Carrinho"
        component={Cart}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#03a9fa',
          },
          headerTitle: <Text style={{ fontSize: 23, color: '#fff', fontWeight: 'bold' }}>Shopping Car</Text>
        }}
      >
        <Stack.Screen name="Home" component={tabHomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
