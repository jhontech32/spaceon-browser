import React, { Component } from 'react'
import {
  StyleSheet, View, StatusBar, Platform
} from 'react-native'
// import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import color from 'theme/color'

// SPLASH
import Splash from 'screens/Splash'

// AUTH
// import ForgotPswd from 'screens/Auth/Forgot'
// import ResetPswd from 'screens/Auth/Reset'
// import Register from 'screens/Auth/Register/View'
// import RegisterInterest from 'screens/Auth/Register/Interest'
// import ForgotPswd from 'screens/Auth/ForgotPswd'
// import VerificationPage from 'screens/Auth/VerificationPage'
// import ResetPswd from 'screens/Auth/ResetPswd'

// CONTENT
import Home from 'screens/Content/Home'


// BROWSING
import Browsing from 'screens/Browsing'

// SETTINGS
import Settings from 'screens/Settings/View'

// ACCOUNT
// import Account from 'screens/Account/View'
// import EditProfile from 'screens/Account/Edit'
// import ChangePswd from 'screens/Account/Change'

import TabBarItem from 'screens/components/TabBarItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryColor
  }
})

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({
          focused
        }) => {
          let iconName
          let circleMenu

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline'
          } else if (route.name === 'News') {
            iconName = focused
              ? 'newspaper-outline'
              : 'newspaper-outline'
          } else if (route.name === 'Browsing') {
            circleMenu = true
            iconName = focused
              ? 'earth'
              : 'earth'
          } else if (route.name === 'None') {
            iconName = focused
              ? 'settings-outline'
              : 'settings-outline'
          } else if (route.name === 'Settings') {
            iconName = focused
              ? 'settings-outline'
              : 'settings-outline'
          }

          // You can return any component that you like here!
          return (
            <TabBarItem
              focused={focused}
              iconName={iconName}
              circleMenu={circleMenu}
              typeIcon="Ionicons"
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: color.primaryColor,
        inactiveTintColor: color.secondaryText,
        tabStyle: { borderTopWidth: 0, paddingBottom: 5 },
        style: {
          borderTopWidth: 0,
          shadowColor: color.primaryText,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="News"
        component={Home}
      />
      <Tab.Screen
        name="Browsing"
        component={Home}
      />
      <Tab.Screen
        name="None"
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  )
}

class Routes extends Component {
  state = {
    isLoading: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }

  render () {
    const { isLoading } = this.state

    if (isLoading) {
      return (
        <>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            backgroundColor={color.primaryColor}
          />
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          </Stack.Navigator>
        </>
      )
    }

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor={color.textIcons}
        />
        <Stack.Navigator initialRouteName="Browsing">
          <Stack.Screen
            name="Home"
            component={Browsing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterInterest"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPswd"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPswd"
            component={Home}
            options={{
              headerShown: false,
              gesturesEnabled: false
            }}
          />
          <Stack.Screen
            name="VerificationPage"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Browsing"
            component={Browsing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="SetTheme"
            component={SetTheme}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </View>
    )
  }
}

export default Routes
