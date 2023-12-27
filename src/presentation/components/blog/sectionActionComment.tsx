import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../../../constants'

export default function SectionActionComment() {
    const [comment, setComment] = useState('')

    return (
        <View style={tw`flex flex-row items-center justify-between px-4 py-2.5 bg-white`}>
            <TextInput
                style={tw`flex-1 px-4 py-1.5 text-base rounded-md border border-[${COLOR.BORDER_COLOR}]`}
                onChangeText={val => {
                    setComment(val)
                }}
                value={comment}
                placeholder="Comment..."
            />
            <TouchableOpacity
                style={tw`pl-3 py-1`}
            >
                <Ionicons name='send' style={tw`text-2xl text-[${COLOR.PRIMARY_COLOR}]`} />
            </TouchableOpacity>
        </View>
    )
}