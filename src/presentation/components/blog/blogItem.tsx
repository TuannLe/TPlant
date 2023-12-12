import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function BlogItem({ item }: any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BlogDetailScreen', { item: item })}
            style={tw`bg-white shadow-md`}
        >
            <Image
                source={{ uri: item.image }}
                style={tw`w-full h-58`}
                resizeMode={'stretch'}
            />
            <View style={tw`px-4 py-2`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        source={{ uri: item.author_avt }}
                        style={tw`w-[50px] h-[50px] rounded-full`}
                        resizeMode={'stretch'}
                    />
                    <View style={tw`ml-4`}>
                        <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-lg font-medium`}>{item.author_name}</Text>
                        <Text style={tw`text-[${COLOR.TEXT_GRAY}]`}>{item.date}</Text>
                    </View>
                </View>
                <View>
                    <Text numberOfLines={1} style={tw`text-[${COLOR.TEXT_BLACK}] text-lg font-medium`}>{item.title}</Text>
                    <Text numberOfLines={2} style={tw`text-[${COLOR.TEXT_GRAY}]`}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}