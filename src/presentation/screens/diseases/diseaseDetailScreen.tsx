import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { COLOR } from '../../../constants'
import SizedBoxItem from '../../components/sizedBoxItem'

export default function DiseaseDetailScreen({ route, navigation }: any) {
    const item = route.params.item
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`p-4 flex flex-row items-center justify-between`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`px-2.5 py-1.5 rounded-full bg-[${COLOR.ACCENT_COLOR}]`}
                >
                    <Ionicons name='arrow-back' style={tw`text-2xl text-[${COLOR.PRIMARY_COLOR}]`} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[tw`flex flex-row items-center px-2.5 py-1.5 rounded-full bg-[${COLOR.ACCENT_COLOR}]`]}
                >
                    <SimpleLineIcons name='share-alt' style={tw`text-lg text-[${COLOR.PRIMARY_COLOR}]`} />
                    <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-base`}> Share</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`px-4`}>
                <Text style={tw`text-3xl font-medium text-[${COLOR.PRIMARY_COLOR}]`}>{item.name}</Text>
                <SizedBoxItem width="0" height="2" />
                <Image source={{ uri: item.image }} style={tw`w-full h-[200px] rounded-md`} />
            </View>
            <View style={tw`flex-1 bg-white rounded-t-xl shadow-2xl mt-4 p-4`}>
                <Text style={tw`text-xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Description</Text>
                <SizedBoxItem width="0" height="2" />
                <Text>{item.description}</Text>
            </View>
        </View>
    )
}