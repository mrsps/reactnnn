import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCards />
        <FlatCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}