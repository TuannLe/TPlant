import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from '../../constants'

export default function HeaderScreenItem({ title }: any) {
    const navigation = useNavigation()
    return (
        <View style={tw`relative flex flex-row items-center justify-center px-4 py-3 bg-[${COLOR.ACCENT_COLOR}]`}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tw`absolute left-0 top-0 px-4 py-2.5 `}
            >
                <Ionicons name='chevron-back' style={tw`text-2xl text-[${COLOR.PRIMARY_COLOR}]`} />
            </TouchableOpacity>
            <Text style={tw`text-xl font-medium text-[${COLOR.PRIMARY_COLOR}]`}>{title}</Text>
        </View>
    )
}