import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersStack from './src/Stacks/OrdersStack';
import SupportStack from './src/Stacks/SupportStack';
import { log } from './src/Recursive/Log';
// import { Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Ionicons';
// npx react-native start --reset-cache
const Tab = createBottomTabNavigator();

export default function App() {

  const [loaded, setLoaded] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         await Icon.loadFont();
    //         setLoaded(true);
    //     })();
    // }, []);


  return loaded && (
    <NavigationContainer>
      {/* navigationOptions: {drawerLabel: () => null} */}
      <Tab.Navigator  screenOptions={(props) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

          },
        })} >
        <Tab.Screen name="Orders" component={OrdersStack} options={(props) => ({
          tabBarVisible: getTabBarVisibility(props),
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            // <Icon
            //   name='rowing' />
            <Text>T</Text>
          ),
        })}  
      
      />

      <Tab.Screen name="Soporte" component={OrdersStack} component={SupportStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function getTabBarVisibility(props){
  log(props.route.name)

  if(props.name == "OrderDetail"){
    return false

  }

  return true

  
}

