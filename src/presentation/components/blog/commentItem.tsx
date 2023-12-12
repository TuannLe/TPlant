import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'

export default function CommentItem() {
    return (
        <View>
            <View style={tw`flex flex-row items-center`}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }}
                    style={tw`w-10 h-10 rounded-full`}
                    resizeMode={'stretch'}
                />
                <View style={tw`ml-4`}>
                    <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-base font-medium`}>tuan le</Text>
                    <Text style={tw`text-[${COLOR.TEXT_GRAY}] text-xs`}>20-10-2023</Text>
                </View>
            </View>
            <View>
                <Text>Comment ....</Text>
            </View>
        </View>
    )
}