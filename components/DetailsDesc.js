import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import { EtheriumPrice, Title } from './subinfo'

const DetailsDesc = ({data}) => {
    //to show little rather then the whole massive text box
    //0 to 100 onlyce show the first 100 characters first
    const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
    <View
    style={{
        width:'100%',
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection:'row'
    }}
    >
      <Title
      title={data.name}
      subTitle={data.creator}
      titleSize={SIZES.extraLarge}
      subTitleSize={SIZES.font}
      />
      <EtheriumPrice
      price={data.price}
      />
    </View>
    <View style={{marginVertical:SIZES.extraLarge*1.5}}>
        <Text
        style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary
        }}
        >Description
        </Text>
        <View
        style={{
            marginTop:SIZES.base,
        }}
        >
            <Text
            style={{    
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                color: COLORS.secondary,
                lineHeight: SIZES.large
            }}
            
            >
             {text}
            {!readMore && "..."}
            <Text
                   style={{
                    color: COLORS.primary,
                    fontSize: SIZES.small,
                    fontFamily: FONTS.semiBold,
                  }}

               onPress={()=>{
                if(!readMore){
                    setText(data.description)
                    setReadMore(true)
                }else{
                    setText(data.description.slice(0, 100))
                    setReadMore(false)
                }
            }}
            >
            {readMore ? 'Show less' : 'Read More'}
            </Text>
            </Text>
            
        </View>
    </View>
    </>
  )
}

export default DetailsDesc