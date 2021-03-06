import React, {Component} from 'react'
import {View, StatusBar} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {imageBackgroundStyle} from '../core/General'
import {IMAGE} from '../constants/Image'

export class SplashScreen extends Component{


    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){

        setTimeout( () =>{
            this.goToScreen('Login')
        },5000, this)
    }


    render(){
        return(
            <View style={imageBackgroundStyle.image}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    
                    source={IMAGE.ICON_SPLASH}
                />
            </View>
        )
    }
}