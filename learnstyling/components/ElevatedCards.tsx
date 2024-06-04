import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>you</Text>
        </View>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>can</Text>
        </View>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>these</Text>
        </View>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>cards</Text>
        </View>
        <View style={[styles.card, styles.cardelevate]}>
            <Text style={styles.ntext}>horizontaly</Text>
        </View>
      </ScrollView>
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
    cardelevate:{
        backgroundColor: 'pink',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: 'red',
        shadowOpacity:0.7,
        shadowRadius:1
    },
    ntext:{
        fontSize:18,
        color: 'black'
    },
})