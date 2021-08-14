import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class HomeScreenDetail extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1,marginTop:22}}>
              <CustomHeader title="Cotización" navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
                <Text>Home Detail!</Text>
              </View>
            </SafeAreaView>
          );
    }
}