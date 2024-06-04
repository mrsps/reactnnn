import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.ntext}>red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.ntext}>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.ntext}>green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight: 'bold',
        padding: 8,
        color: 'black'
    },
    container:{
        flex:1,
        flexDirection:'row',
        margin:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:12,
        margin:8
    },
    cardOne:{
        backgroundColor: 'red'
    },
    ntext:{
        fontSize:18
    },
    cardTwo:{
        backgroundColor:'blue'
    },
    cardThree:{
        backgroundColor:'green'
    }
})