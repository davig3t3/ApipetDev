import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class SettingsScreenDetail extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1,marginTop:22}}>
              <CustomHeader title="Setting Detail" navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
                <Text>Setting Detail!</Text>
              </View>
            </SafeAreaView>
          );
    }
}