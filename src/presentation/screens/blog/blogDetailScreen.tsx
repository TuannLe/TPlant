import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { COLOR } from '../../../constants'
import SizedBoxItem from '../../components/sizedBoxItem'
import { formatDate } from '../../../util'
import SectionAction from '../../components/blog/sectionAction'
import SectionActionComment from '../../components/blog/sectionActionComment'
import SectionListComment from '../../components/blog/sectionListComment'

export default function BlogDetailScreen({ route, navigation }: any) {
    const item = route.params.item

    return (
        <View style={tw`flex w-full h-full justify-between`}>
            <View style={tw`relative w-full`}>
                <Image source={{ uri: item.images }} style={tw`w-full h-58 `} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[tw`absolute top-4 left-4 px-2.5 py-1.5 rounded-full`, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
                >
                    <Ionicons name='arrow-back' style={tw`text-2xl text-white`} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1`}>
                <View style={tw`bg-white px-4 pt-3`}>
                    <View style={tw`flex flex-row items-center`}>
                        <Octicons name='feed-person' style={tw`text-5xl text-[${COLOR.BORDER_COLOR}]`} />
                        <View style={tw`ml-4`}>
                            <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-lg font-medium`}>{item.created_by}</Text>
                            <Text style={tw`text-[${COLOR.TEXT_GRAY}]`}>{formatDate(item.created_at)}</Text>
                        </View>
                    </View>
                    <SizedBoxItem width='0' height='4' />
                    <View>
                        <Text style={tw`text-[${COLOR.TEXT_BLACK}] text-lg font-medium`}>{item.title}</Text>
                        <Text style={tw`text-[${COLOR.TEXT_GRAY}] text-base`}>{item.content}</Text>
                    </View>
                    <SizedBoxItem width='0' height='3' />
                    <View style={tw`w-full h-[1px] bg-gray-200`} />
                    <SectionAction item={item} />
                </View>
                <SectionListComment />
            </View>
            <SectionActionComment />
        </View>
    )
}