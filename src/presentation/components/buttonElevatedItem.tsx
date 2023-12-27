import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../constants'

export default function ButtonElevatedItem({ onPress, text }: any) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={tw`py-3 rounded-md bg-[${COLOR.PRIMARY_COLOR}]`}
        >
            <Text style={tw`text-lg text-center text-white font-medium`}>{text}</Text>
        </TouchableOpacity>
    )
}