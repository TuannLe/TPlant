import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../constants'

export default function InputItem({ placeholder, isSecureText, value, setValue }: any) {
    return (
        <TextInput
            secureTextEntry={isSecureText}
            placeholder={placeholder}
            value={value}
            onChangeText={val => {
                setValue(val)
            }}
            style={tw`px-3 py-2 text-base text-[${COLOR.TEXT_BLACK}] border border-[${COLOR.BORDER_COLOR}] rounded bg-white `}
        />
    )
}