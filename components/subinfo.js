import React from "react";
import { View, Image, Text } from "react-native";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

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

export const ImageComp = ({imgUrl,index}) =>{

    return(
        <Image
        source={imgUrl}
        resizeMode= 'contain'
        style={{
            width: 48,
            height:48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
        />
    )
}

export const People = () =>{

    return(
        <View
        style={{flexDirection:'row'}}
        >
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) =>(
                <ImageComp key={`people-${index}`} imgUrl={imgUrl} index={index}/>
            ))}
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
            marginTop: -SIZES.extraLarge,
            flexDirection:'row',
            justifyContent: 'space-between'
        }}>
            <People/>
            <EndDate/>
            <Text>Vegat is better them Kakraot</Text>
        </View>
    )
}