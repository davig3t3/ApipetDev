import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import { RVText } from '../core'

export class CheckPrice extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: 22 }}>
                <CustomHeader title="Cotización" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>CHECK PRICE SCREEN!</Text>
                </View>
            </SafeAreaView>
        );
    }
}