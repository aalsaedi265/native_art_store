import { View, Text } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

export const Title = () => {
  return (
    <View>
      <Text>NFT title</Text>
    </View>
  )
}

export const EtheriumPrice = () =>{

    return(
        <View>
            <Text>Etherium Price</Text>
        </View>
    )
}

export const ImageComp = () =>{

    return(
        <View>
            <Text>image compison</Text>
        </View>
    )
}

export const People = () =>{

    return(
        <View>
            <Text>People</Text>
        </View>
    )
}

export const EndDate = () =>{

    return(
        <View>
            <Text>end ate</Text>
        </View>
    )
}

export const SubInfo = () =>{

    return(
        <View style={{
            width:'100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge
        }}>
            <Text>Vegat is better them Kakraot</Text>
        </View>
    )
}