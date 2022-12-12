import { View, Text, Image } from 'react-native'
import {  useNavigation } from '@react-navigation/native'
import {COLORS, SIZES, SHADOWS, assets} from '../constants'
import {RectButton, CircleButton} from './Button'
import { SubInfo, Title, EtheriumPrice } from './subinfo'

const Card = ({data}) => {
  return (
    <View style={{
      backgroundColor:COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin:SIZES.base, ...SHADOWS.dark
    }}>

      <View style={{width:'100%', height:250}}>
        <Image
    source={data.image}
    resizeMode="cover"
    style={{
      width: "100%",
      height:'100%',
      borderTopLeftRadius: SIZES.font,
      borderTopRightRadius:SIZES.font
    }}
      />
      <CircleButton
      imgUrl={assets.heart}
      right={10}
      top={10}// to get right positon
      />
      </View>
        <SubInfo/>
        <View style={{
          width:'100%',
          padding: SIZES.font
      }}>
        <Title 
        title={data.name} 
        subTitle={data.creator}
        titleSize={SIZES.large}
        subTitleSize={SIZES.small}
        />
        </View>

        <View style={{
         marginTop: SIZES.font,
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
        }}>
         <EtheriumPrice price={data.price}/>
         <RectButton
         minWidth={120}
         fontSize={SIZES.font}
         //handlrepress send to detials page
         handlePress={() => navigation.navigate("Details", { data })}
         //Details is the name of the screen to go to
         />
        </View>
    </View>
  )
}

export default Card