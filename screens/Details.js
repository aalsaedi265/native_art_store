//rfc

import React from 'react'
import { Text, SafeAreaView, View, FlatList, Image, StatusBar } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import {  CircleButton,
          SubInfo,
          FocusedStatusBar,
          RectButton,
          DetailsBid, DetailsDesc
          } from '../components'




const DetailsHeader= ({data, navigation})=>(
  
  <View style={{width: '100%', height:373}}>
    <Image source={data.image}
    style={{width:'100%', height:'100%'}}
    resizeMode='cover'    
    />
    <CircleButton
    imgUrl={assets.left}
    //this goes up the stack, it is access thank to nav wrapoing all thing
    handlePress={()=> navigation.goBack()}
    left={15}
    top={StatusBar.currentHeight+10}
    />
    <CircleButton
    imgUrl={assets.heart}
    //this goes up the stack, it is access thank to nav wrapoing all thing
    handlePress={()=> navigation.goBack()}
     right={15}
    top={StatusBar.currentHeight+10}
    />
  </View>
)   

const Details=({route, navigation}) =>{

  const { data} = route.params

  
  return (
    <SafeAreaView style={{flex:1}} >
      <FocusedStatusBar
      translucent={true}
      backgroundColor='transparent'
      barStyle = "dark-content"
      />
      <View style={{
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
        zIndex:1, //apear above spefic content thati is below it
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>
      <FlatList
      data={data.bids}
      renderItem={({ item }) => <DetailsBid bid={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
       contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
      ListHeaderComponent={()=>(
        <>
        <DetailsHeader data={data} navigation={navigation}/>
        <SubInfo/>
        <View
        style={{padding: SIZES.font}}
        >
          <DetailsDesc data={data} />
          {data.bids.length > 0 && (
            <Text 
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary
            }}
            > Current Bids
            </Text>
          )}
        </View>
        </>
      )}
      />
    </SafeAreaView>
  )
}

export default  Details

