import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'

export default function CategoryItem({ item }: any) {
    return (
        <TouchableOpacity style={tw`px-4 py-2 bg-gray-200 rounded`}>
            <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>{item}</Text>
        </TouchableOpacity>
    )
}