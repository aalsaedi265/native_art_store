import React from 'react'
import {View, Image ,Text, TouchableOpacity} from 'react-native'
import { SIZES,COLORS, FONTS, SHADOWS } from '../constants'

//not using defualt allows export of many fuinctions
export const CircleButton=({imgUrl, handlePress,...props})=>{

    return (
        //button in mobile
        <TouchableOpacity
        style={{
            width:30,
            height:30,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            ...SHADOWS.light,
            ...props
            
        }}
        onPress={handlePress}
        >
            <Image
            source={imgUrl}
            resizeMode='contain'
            style={{width:24,
            height:34}}
            />
        </TouchableOpacity>
    )
}

export const RectButton = ({handlePress,fontSize ,minWidth, ...props})=>{

    return (
        <TouchableOpacity
        style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth:minWidth,
            padding: SIZES.small,
            ...props
            
        }}
        onPress={handlePress}
        >
            <Text style={{
                color:COLORS.white,
                fontFamily: FONTS.semiBold,
                textAlign: 'center',
                fontSize: fontSize
            }}>
                Place Bid
            </Text>
        </TouchableOpacity>
      
    )
}