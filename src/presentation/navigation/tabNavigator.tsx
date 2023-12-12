import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    BlogScreen,
    DiseaseScreen,
    HomeScreen,
    ProfileScreen,
    ScanScreen
} from '../screens'
import { COLOR } from '../../constants';
import { RootTabParamList } from './interface';

export default function TabNavigator() {
    const token = ''
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeTab'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Octicons name="home" size={24} color={COLOR.PRIMARY_COLOR} />
                            ) : (
                                <Octicons name="home" size={24} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name='BlogTab'
                component={BlogScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Octicons name="book" size={24} color={COLOR.PRIMARY_COLOR} />
                            ) : (
                                <Octicons name="book" size={24} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name='ScanTab'
                component={ScanScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <AntDesign name="scan1" size={24} color={COLOR.PRIMARY_COLOR} />
                            ) : (
                                <AntDesign name="scan1" size={24} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name='DiseaseTab'
                component={DiseaseScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <MaterialCommunityIcons name="leaf-circle-outline" size={24} color={COLOR.PRIMARY_COLOR} />
                            ) : (
                                <MaterialCommunityIcons name="leaf-circle-outline" size={24} color={color} />
                            )}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name='ProfileTab'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Feather name="user" size={24} color={COLOR.PRIMARY_COLOR} />
                            ) : (
                                <Feather name="user" size={24} color={color} />
                            )}
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    )
}