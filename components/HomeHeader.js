import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";


const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
      }}>
          <Image
          source={assets.logo}
          resizeMode="contain"
          style={{width:90, height:25}}
          />

          <View style={{
            width:45,
            height:45
          }}>
            <Image
            source={assets.person01}
            resizeMode='contain'
            style={{width:'100%', height:'100%'}}
            />
             <Image
            source={assets.badge}
            resizeMode='contain'
            style={{position:'absolute',
             width:15, height:15, right:0, bottom:0}}
            />
          </View>
        </View>
        <View style={{marginVertical:SIZES.font}}>
          <Text
          style={{
            fontFamily:FONTS.regular,
            color:COLORS.white,
            fontSize:SIZES.small
          }}
          >Hello, Broly</Text>

          <Text
          style={{
            fontFamily: FONTS.bold,
            color:COLORS.white,
            marginTop:SIZES.base,
            fontSize: SIZES.large,
            marginTop: SIZES.base/2
          }}
          > Please don't take a picture</Text>
        </View>
        <View style={{marginTop:SIZES.font}}>
          <View style={{
            width:'100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical:SIZES.small
          }}>
            <Image
            source={assets.search}
            resizeMode='contain'
            style={{width:20,
                    height:20,
                    marginRight: SIZES.base
                    }}
            />
            <TextInput
            placeholder='Search Art'
            style={{flex:1, color:'pink', fontFamily:'InterBold'}}
            onChangeText={()=>{}}
            />
          </View>
        </View>
    </View>
  )
}

export default HomeHeader