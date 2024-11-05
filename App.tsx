import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import Home from './components/Home'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Login' component={Login}/>
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App
