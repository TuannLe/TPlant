import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './stackNavigator'

export default function index() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}