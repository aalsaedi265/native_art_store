import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { View,Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

import {COLORS, FONTS, SIZES, assets, NFTData} from '../constants'



const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;

}

// return (
    
//   <View>
//        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
//   </View>
// )

{/* <SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" animated={true} backgroundColor="#ea392f" />
<Text style={{ color: "#fff" }}>Demonstration of Status Bar from Alarmy's app</Text>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#252422',
},
}); */}

export default FocusedStatusBar;
