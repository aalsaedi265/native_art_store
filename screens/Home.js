
import React, {useState} from 'react'
import { Text, SafeAreaView , FlatList, View} from 'react-native'
import {COLORS, FONTS, SIZES, assets, NFTData} from '../constants'
import { StatusBar } from "react-native";

//DataFolder comes from an old list based project
//downloaded the folder and moved it here
//styling, dummie data, and logic of data flor

import { FocusedStatusBar , HomeHeader, Card } from '../components'
//falstlist deletes items when off  screen for better optimazatoin
//loads thing like a liks similar to map function

//dafeArea insrues things are placed only in desganated paramters
export  default function Home() {

 const [search, setSearch] = useState(NFTData)// take the array of all dummie data from free folder

 function handleSerch(value){
  
    if(!value.length) setSearch(NFTData)

    const filterData= NFTData.filter( el=> el.name.toLowerCase().includes(value.toLowerCase() ) )

    filterData.length ? setSearch(filterData) : setSearch(NFTData)
 }



  return (
    <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar backgroundColor={COLORS.primary} /> 
        {/* <StatusBar backgroundColor={'red'} barStyle={'dark-content'}  hidden={false} animated={true} translucent={false} />  */}

      <View style={{flex:1}}>
      
        <View style={{zIndex:0}}>
            <FlatList
            data={search}
            renderItem={({ item })=> <Card data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false} //don't want ugly scholl bar
            ListHeaderComponent={<HomeHeader onSearch={handleSerch}/>}
            />
        </View>

        <View style={{
            position:'absolute',
            top:0,
            bottom:0,
            right: 0,
            left:0,
            zIndex: -1, //behinde, 0 normal, 1 infront
        }}>
            <View style={{height:300,
            backgroundColor: COLORS.primary}}/>
            <View style={{flex:1, 
            backgroundColorL: COLORS.gray}}/>

        </View>
      </View>
    </SafeAreaView>
  )
}