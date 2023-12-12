import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'

export default function WeatherItem({ icon, title, data, unit }: any) {
    return (
        <View style={tw`w-[110px] h-full px-2 py-5 flex items-center bg-white rounded-lg shadow-lg`}>
            {icon}
            <Text style={tw`text-[${COLOR.TEXT_BLACK}] text-base my-2`}>{title}</Text>
            <View style={tw`flex flex-row items-start`}>
                <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-2xl font-medium`}>{data}</Text>
                <Text style={tw`ml-1.5 text-[${COLOR.PRIMARY_COLOR}] text-base font-medium`}>{unit}</Text>
            </View>
        </View>
    )
}