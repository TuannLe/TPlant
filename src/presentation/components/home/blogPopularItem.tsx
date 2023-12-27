import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { formatDate } from '../../../util'

export default function BlogPopularItem({ item }: any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BlogDetailScreen', { item: item })}
            style={tw`flex flex-row items-center bg-white shadow-md rounded-lg overflow-hidden`}
        >
            <Image source={{ uri: item.images }} style={tw`w-20 h-20`} />
            <View style={tw`flex-1 px-4`}>
                <Text numberOfLines={1} style={tw`text-lg text-[${COLOR.TEXT_BLACK}] font-medium`}>{item.title}</Text>
                <Text numberOfLines={1} style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>{item.content}</Text>
                <Text numberOfLines={1} style={tw`text-xs italic text-[${COLOR.TEXT_GRAY}]`}>{formatDate(item.created_at)}</Text>
            </View>
            <AntDesign name='right' style={tw`text-2xl text-gray-400 pr-2`} />
        </TouchableOpacity>
    )
}