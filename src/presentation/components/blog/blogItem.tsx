import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Octicons from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from '../../../constants'
import { formatDate } from '../../../util'

export default function BlogItem({ item }: any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BlogDetailScreen', { item: item })}
            style={tw`bg-white shadow-md`}
        >
            <Image
                source={{ uri: item.images }}
                style={tw`w-full h-58`}
                resizeMode={'cover'}
            />
            <View style={tw`px-4 py-2`}>
                <View style={tw`flex flex-row items-center`}>
                    {/* <Image
                        source={{ uri: item.author_avt }}
                        style={tw`w-[50px] h-[50px] rounded-full`}
                        resizeMode={'stretch'}
                    /> */}
                    <Octicons name='feed-person' style={tw`text-5xl text-[${COLOR.BORDER_COLOR}]`} />
                    <View style={tw`ml-4`}>
                        <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-lg font-medium`}>{item.created_by}</Text>
                        <Text style={tw`text-[${COLOR.TEXT_GRAY}]`}>{formatDate(item.created_at)}</Text>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text numberOfLines={1} style={tw`text-[${COLOR.TEXT_BLACK}] text-lg font-medium`}>{item.title}</Text>
                    <Text numberOfLines={2} style={tw`text-[${COLOR.TEXT_GRAY}]`}>{item.content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}