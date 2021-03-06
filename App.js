import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustomDrawerContent } from './src'
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail } from './src/tab'
import { NotificationsScreen, CheckPrice } from './src/drawer'
import { RegisterScreen, LoginScreen, SplashScreen } from './src/auth'
import { IMAGE } from './src/constants/Image'



const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )

}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )

}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {


          let iconName;

          if (route.name === 'TEXPLUS') {
            iconName = focused
              ? IMAGE.ICON_HOME
              : IMAGE.ICON_HOME_BLACK;
          } else if (route.name === 'FLOW PLUS') {
            iconName = focused ?
              IMAGE.ICON_SETTINGS
              : IMAGE.ICON_SETTINGS_BLACK;
          } else if (route.name === 'SMART PLUS') {
            iconName = focused ?
              IMAGE.ICON_BRAIN
              : IMAGE.ICON_BRAIN_BLACK;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }}
            resizeMode="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="TEXPLUS" component={HomeStack} />
      <Tab.Screen name="FLOW PLUS" component={SettingStack} />
      <Tab.Screen name="SMART PLUS" component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="SplashScreen">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="CheckPrice" component={CheckPrice} options={navOptionHandler} />
        <StackApp.Screen name="SplashScreen" component={SplashScreen} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}