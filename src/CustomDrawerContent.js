import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { IMAGE } from './constants/Image'
import firebase from './auth/Firebase'

export class CustomDrawerContent extends Component {
  constructor() {
    super();
    this.state = {
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    } 
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 22 }}>
        <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={IMAGE.ICON_PROFILE}
            style={{ height: 120, width: 120, borderRadius: 60 }} />
          <Text>
            Hola, {this.state.displayName}
          </Text>
        </View>
        <ScrollView style={{ marginLeft: 5 }}>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('MenuTab')}
          >
            <Text>Productos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Notifications')}
          >
            <Text>Cotizar clientes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Notifications')}
          >
            <Text>Añadir tarifas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Notifications')}
          >
            <Text>Clientes</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity
          style={{ marginTop: 20, alignItems:'center', }}
          onPress={() => this.signOut()}
        >
          <Text>Cerrar sesión</Text>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }

}