import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import AllCountriesStatsScreen from '../Screens/All_Countries_Stats';

const TabNavigation = () => {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator shifting={false} screenOptions={{
        }}>
            <Tab.Screen
                name="ASIA"
                component={AllCountriesStatsScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="globe-asia"
                        size={20}
                        color="white"
                        style={{ marginBottom: 10 }}
                    />
                }}
                initialParams={{ continent: "asia" }}
            />

            <Tab.Screen
                name="AFRICA"
                component={AllCountriesStatsScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="globe-africa"
                        size={20}
                        color="white"
                        style={{ marginBottom: 10 }}
                    />
                }}
                initialParams={{ continent: "africa" }}

            />

            <Tab.Screen
                name="AUSTRALIA"
                component={AllCountriesStatsScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="globe-asia"
                        size={20}
                        color="white"
                        style={{ marginBottom: 10 }}
                    />
                }}
                initialParams={{ continent: "australia" }}
            />

            <Tab.Screen
                name="AMERICA"
                component={AllCountriesStatsScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="globe-americas"
                        size={20}
                        color="white"
                        style={{ marginBottom: 10 }}
                    />
                }}
                initialParams={{ continent: "america" }}
            />


            <Tab.Screen
                name="Europe"
                component={AllCountriesStatsScreen}
                options={{
                    tabBarIcon: () => <FontAwesome5
                        name="globe-europe"
                        size={20}
                        color="white"
                        style={{ marginBottom: 10 }}
                    />
                }}
                initialParams={{ continent: "europe" }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;