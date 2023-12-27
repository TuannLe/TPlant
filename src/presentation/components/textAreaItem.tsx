import { TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../constants'

export default function TextAreaItem({ placeholder, value, setValue, numberOfLines }: any) {
    return (
        <TextInput
            placeholder={placeholder}
            multiline={true}
            numberOfLines={numberOfLines}
            value={value}
            onChangeText={val => {
                setValue(val)
            }}
            style={[tw`px-3 py-2 text-base text-[${COLOR.TEXT_BLACK}] border border-[${COLOR.BORDER_COLOR}] rounded bg-white `, { textAlignVertical: 'top' }]}
        />
    )
}