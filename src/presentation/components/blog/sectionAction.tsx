import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SizedBoxItem from '../sizedBoxItem'
import { useDispatch } from 'react-redux'
import { AddFavoriteBlog } from '../../../core/redux/actions/blogAction'

export default function SectionAction({ item }: any) {
    const dispatch = useDispatch()
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    const handleSave = () => {
        dispatch(AddFavoriteBlog(item))
        setSave(!save)
    }

    return (
        <View style={tw`w-full flex flex-row justify-between`}>
            <View style={tw`flex flex-row`}>
                <TouchableOpacity
                    onPress={handleLike}
                    style={tw`p-2`}
                >
                    {
                        like ?
                            <Ionicons name='heart-sharp' style={tw`text-2xl text-red-500`} /> :
                            <Ionicons name='heart-outline' style={tw`text-2xl text-black`} />
                    }
                </TouchableOpacity>
                <SizedBoxItem width='3' height='0' />
                <TouchableOpacity
                    style={tw`p-2`}
                    onPress={handleSave}
                >
                    {
                        save ?
                            <Ionicons name='bookmark' style={tw`text-2xl text-yellow-400`} /> :
                            <Ionicons name='bookmark-outline' style={tw`text-2xl text-black`} />
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={tw`p-2`}
            >
                <Ionicons name='share-social' style={tw`text-2xl text-black`} />
            </TouchableOpacity>
        </View>
    )
}