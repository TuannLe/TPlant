import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './tabNavigator'
import {
    LoginScreen,
    RegisterScreen,
    BlogDetailScreen,
    DiseaseDetailScreen,
} from '../screens'
import { RootStackPramList } from './interface'


export default function RootNavigator() {
    const Stack = createNativeStackNavigator<RootStackPramList>()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }
            }
        >
            <Stack.Screen
                name="Root"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BlogDetailScreen"
                component={BlogDetailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DiseaseDetailScreen"
                component={DiseaseDetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}