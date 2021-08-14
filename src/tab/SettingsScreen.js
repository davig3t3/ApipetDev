import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import { RVText } from '../core'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


export class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 22 }}>
        <CustomHeader title="FLOW PLUS" isHome={true} navigation={this.props.navigation} />
        <ScrollView style={{ flex: 1, marginHorizontal: 10 }}>
          <Card style={{ marginTop: 50 }}>
            <CardTitle
              title="Gestión Basica"
              subtitle="This is subtitle"
            />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => this.props.navigation.navigate('HomeDetail')}
                title="SIGUIENTE"
                color="#CD1417"
              />
            </CardAction>
          </Card>
          <Card style={{ marginTop: 50 }}>
            <CardTitle
              title="Laboratorio"
              subtitle="This is subtitle"
            />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => this.props.navigation.navigate('HomeDetail')}
                title="SIGUIENTE"
                color="#CD1417"
              />
            </CardAction>
          </Card>

        </ScrollView>
      </SafeAreaView>
    );
  }
}