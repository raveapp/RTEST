// } from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Button} from "react-native-web";

export default class rave3 extends Component {


    constructor(props) {
     super(props);
        this.state =
        {

                    startDestination: "loading...",
                    something:"something"

        }
    }
        getLocation = async () => {

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // console.log("this is the lat and long: ", position)
                    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD2_6K7CF1C1ooSwgDxxDq2WBx8bAIihIU`)
                        .then(response => response.json())
                        .then(json => {
                            this.setState(previousState => (
                                {startDestination: json.results[0].address_components[2].long_name}
                            ))
                        })
                },
                (err) => {
                    console.log(err)
                })
        }
    componentDidMount() {
        this.getLocation();

    }
    render() {
        console.log(this.state.startDestination)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Welcome to the {this.state.startDestination} Garage</Text>
            </View>
        );
    }
}



// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
// import React, { useState } from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
//
// import AppNavigator from './navigation/AppNavigator';
// import Text from "react-native-web/src/exports/Text";
//
// export default function App(props) {
//
//
//
//
//         render()
//         return (
//             <View>
//               <Text>{this.state.startDestination}</Text>
//             </View>
//             )
//
//
//     // render() {
//     //     return (
//     //         <View>
//     //         <Text>{this.state.startDestination}</Text>
//     //         </View>
//     //     )}
// }
// //   } else {
// //     return (
// //       <View style={styles.container}>
// //         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
// //         <AppNavigator />
// //       </View>
// //     );
// // }
// //
// // async function loadResourcesAsync() {
// //   await Promise.all([
// //     Asset.loadAsync([
// //       require('./assets/images/robot-dev.png'),
// //       require('./assets/images/robot-prod.png'),
// //     ]),
// //     Font.loadAsync({
// //       // This is the font that we are using for our tab bar
// //       ...Ionicons.font,
// //       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
// //       // remove this if you are not using it in your app
// //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
// //     }),
// //   ]); // }
// // function handleLoadingError(error) {
// //   // In this case, you might want to report the error to your error reporting
// //   // service, for example Sentry
// //   console.warn(error);
// // }
// //
// // function handleFinishLoading(setLoadingComplete) {
// //   setLoadingComplete(true);
// // }
// //
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
