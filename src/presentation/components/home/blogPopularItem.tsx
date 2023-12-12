import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function BlogPopularItem({ item }: any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BlogDetailScreen', { item: item })}
            style={tw`mb-4 flex flex-row items-center bg-white shadow-md`}
        >
            <Image source={{ uri: item.image }} style={tw`w-20 h-20`} />
            <View style={tw`flex-1 px-4`}>
                <Text numberOfLines={1} style={tw`text-lg text-[${COLOR.TEXT_BLACK}] font-medium`}>{item.title}</Text>
                <Text numberOfLines={1} style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>{item.description}</Text>
                <Text numberOfLines={1} style={tw`text-xs text-[${COLOR.TEXT_GRAY}]`}>{item.date}</Text>
            </View>
            <AntDesign name='right' style={tw`text-2xl text-gray-400 pr-2`} />
        </TouchableOpacity>
    )
}