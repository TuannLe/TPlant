import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function DiseaseItem({ item }: any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DiseaseDetailScreen', { item: item })}
            style={tw`flex flex-row items-center bg-white shadow-md rounded-lg overflow-hidden`}
        >
            <Image source={{ uri: item.image }} style={tw`w-20 h-20`} />
            <View style={tw`flex-1 px-4`}>
                <Text numberOfLines={1} style={tw`text-lg text-[${COLOR.TEXT_BLACK}] font-medium`}>{item.name}</Text>
                <Text numberOfLines={1} style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>{item.description}</Text>
            </View>
            <View style={tw`pr-2`}>
                <AntDesign name='right' style={tw`text-2xl text-gray-400`} />
            </View>
        </TouchableOpacity>
    )
}