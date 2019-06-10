import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";

const stackNav = createStackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Board Management",
      headerLeft:(<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{
                      paddingLeft: 15
                    }}>
                      <IOSIcon
                        name="ios-menu"
                        size={30}
                      />
                    </View>
                  </TouchableOpacity>
      ),
    })
  },
Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })     
  }
});

export default stackNav;