import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function SizedBoxItem({ width, height }: any) {
    return (
        <View style={tw`w-[${width}] h-[${height}]`} />
    )
}