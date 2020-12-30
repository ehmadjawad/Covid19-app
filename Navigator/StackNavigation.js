import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CountryDetailsScreen from '../Screens/Country_Details';
import DrawerNavigation from './DrawerNavigation';

const StackNavigation = ({ navigation, route }) => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: 'white',
                headerTitleAlign: "center",

            }}>

                <Stack.Screen name="DrawerNavigation" children={DrawerNavigation}
                    options={{
                        title: "COUNTRIES",
                        headerShown: false,
                    }}
                />

                <Stack.Screen name="CountryDetails" component={CountryDetailsScreen}
                    options={{
                        title: 'DETAILS'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;