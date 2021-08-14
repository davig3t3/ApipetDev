import React, { Component } from 'react'
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView,
  StyleSheet, Alert, Button, TextInput
} from 'react-native';
import { CustomHeader } from '../index'
import { Picker } from '@react-native-community/picker'
import { Checkbox } from 'react-native-paper'

export class NotificationsScreen extends Component {
  constructor() {
    super();
    this.state = {
      PickerSelectedVal: '',
      PickerSelectedVal1: '',
      checked: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      addressee: '',
      addresseeOp: '',
      discount: ''
    }
  }


  getSelectedPickerValue = () => {
    Alert.alert("Selected country is : " + this.state.PickerSelectedVal);
  }

  render() {
    const { checked,checked1,checked2,checked3,checked4} = this.state;

    const handleChangeText = (addressee, value) =>{
      this.setState({...this.state,[addressee]:value})
    }
    return (

      <SafeAreaView style={{ flex: 1, marginTop: 22 }}>
        <CustomHeader title="Cotización" navigation={this.props.navigation} />
        <ScrollView style={{flex:1, marginHorizontal:5}}>
          <View style={styles.container}>
            <Text>PAIS</Text>
            <Picker
              selectedValue={this.state.PickerSelectedVal}
              onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

              <Picker.Item label="India" value="India" />
              <Picker.Item label="USA" value="USA" />
              <Picker.Item label="China" value="China" />
              <Picker.Item label="Colombia" value="Colombia" />
              <Picker.Item label="United Kingdom" value="United Kingdom" />
              <Picker.Item label="France" value="France" />

            </Picker>
            <Text>EMPRESA</Text>
            <Picker
              selectedValue={this.state.PickerSelectedVal1}
              onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal1: itemValue })} >

              <Picker.Item label="Tintatex" value="Tintatex" />
              <Picker.Item label="Artextil" value="Artextil" />
              <Picker.Item label="Tejiendo" value="Tejiendo" />

            </Picker>

            <TextInput
              style={styles.inputStyle}
              placeholder="Destinatario 1"
              onChangeText={(value) => handleChangeText('addressee',value)}
            />

            <TextInput
              style={styles.inputStyle}
              placeholder="Destinatario 2 (opcional)"
              onChangeText={(value) => handleChangeText('addresseeOp',value)}
            />

            <TextInput
              style={styles.inputStyle}
              placeholder="Descuento, oferta"
              onChangeText={(value) => handleChangeText('discount',value)}
            />

            <Checkbox.Item
              label="Hilatura"
              color='#CD1417'
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: !checked }); }}
            />

            <Checkbox.Item
              label="Tejeduria"
              color='#CD1417'
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked1: !checked1 }); }}
            />

            <Checkbox.Item
              label="Tintoreria"
              color='#CD1417'
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked2: !checked2 }); }}
            />
            <Checkbox.Item
              label="Estampación"
              color='#CD1417'
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked3: !checked3 }); }}
            />

            <Checkbox.Item
              label="Lavandería"
              color='#CD1417'
              status={checked4 ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked4: !checked4 }); }}
            />



            <Button color='#CD1417' title="Siguiente" onPress={() => console.log(this.state)} />
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 30
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
});