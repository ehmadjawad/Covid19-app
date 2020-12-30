import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import StartScreen from '../Screens/Start';
import GlobalSummaryScreen from '../Screens/Global_Summary';
import TabNavigation from '../Navigator/TabNavigation';

const DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContentOptions={{
            labelStyle: {
                fontWeight: 'bold',
            },
            activeTintColor: 'blue',
        }}>

            <Drawer.Screen name="StartScreen" component={StartScreen}
                options={{
                    drawerLabel: 'COUNTRIES',
                    drawerIcon: () => <Ionicons name="md-flag" size={30} color="blue" />,
                }}
                initialParams={{ title: "COUNTRIES" }}
            />

            <Drawer.Screen name="GlobalSummary" component={GlobalSummaryScreen}
                options={{
                    drawerLabel: 'GLOBAL SUMMARY',
                    drawerIcon: () => <Ionicons name="ios-globe" size={30} color="blue" />,
                }}
                initialParams={{ title: "GLOBAL SUMMARY" }}
            />

            <Drawer.Screen name="AllCountriesStats" component={TabNavigation}
                options={{
                    drawerLabel: 'ALL COUNTRIES STATS',
                    drawerIcon: () => <Ionicons name="ios-stats" size={30} color="blue" />,
                }}
                initialParams={{ title: "ALL COUNTRIES STATS" }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;