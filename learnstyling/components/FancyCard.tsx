import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.heading}>FancyCard</Text>
      <View style={[styles.card, styles.elevation]}>
        <Image 
        source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Canadian_Horseshoe_Falls_with_city_of_Niagara_Falls%2C_Ontario_in_background.jpg/220px-Canadian_Horseshoe_Falls_with_city_of_Niagara_Falls%2C_Ontario_in_background.jpg'}}
        style={styles.cardimage}
        />
         <Text style={styles.ntext}>Niagra falls</Text>
         <Text style={styles.desctext}>Niagara Falls (/naɪˈæɡərə/) is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries.[1] It is also known as the Canadian Falls.</Text>
         <Text style={styles.fottertext}>15 mins away</Text>
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
    card:{
        flex:1,
        padding:8,
        borderRadius:12,
        margin:8
    },
    elevation:{
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: 'black',
        shadowOpacity:0.7,
        shadowRadius:1
    },
    ntext:{
        fontSize:18,
        color: 'black',
        padding:3,
        margin:3
    },
    cardimage:{
        height:200
    },
    desctext:{
        fontSize:14,
        color: 'black',
        padding:3,
        margin:3
    },
    fottertext:{
        fontSize:16,
        color: 'black',
    },
})