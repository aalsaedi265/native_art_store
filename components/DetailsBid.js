import React from 'react'
import { View, Text, Image } from 'react-native-web'
import { EtheriumPrice } from './subinfo'


function DetailsBid({bid}) {
  return (
    <View
    style={{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:8,
        paddingHorizontal: 8*2
    }}
    key={bid.id}
    >
         <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
        <View>
            <Text
            style={{
                fontFamily:'InterSemiBold',
                fontSize:12,
                color:'001F2D'
                    }}
            > Bid Place by {bid.name}</Text>
                <Text
            style={{
                fontFamily:'InterRegular',
                fontSize:10,
                color:'001F2D',
                marginTop:3
                    }}
            >{bid.date}</Text>
        </View>
        <EtheriumPrice price={bid.price}/>
    </View>
  )
}
export default DetailsBid