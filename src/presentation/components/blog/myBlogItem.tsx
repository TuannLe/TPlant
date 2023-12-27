import { View, Text, TouchableOpacity, Image, Animated, Alert } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Swipeable } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../../../core/redux/actions/blogAction'
import { deleteBlog } from '../../../core/apis/blogApi'
import { handleShowToastSuccess } from '../../../util'
import BlogPopularItem from '../home/blogPopularItem'

export default function MyBlogItem({ item }: any) {
    const dispatch = useDispatch()
    const token = useSelector((state: any) => state.user.token)

    const handleDelete = async () => {
        const res: any = await deleteBlog({ token, payload: item.article_id })
        if (res.status == '200') {
            if (res.data == 'Delete blog successfully') {
                dispatch(ACTIONS.GetALlBlogsStart(token))
            }
        }
    }

    const showConfirmDialog = () => {
        return Alert.alert(
            "Confirm",
            "Are you sure you want to delete item?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        handleDelete()
                        handleShowToastSuccess('Delete blog successfully')
                        return
                    }
                },
                {
                    text: "No",
                    onPress: () => {
                        return
                    }
                }
            ]
        )
    }

    const rightSwipe = (progress: any, dragY: any) => {
        const scale = dragY.interpolate({
            inputRange: [0, 200],
            outputRange: [1, 0],
            // extrapolate: 'clamp'
        })
        return (
            <View style={tw`flex flex-row`}>
                <TouchableOpacity
                    style={tw`flex items-center justify-center w-[70px] bg-blue-500`}
                >
                    <Animated.Text style={[{ transform: [{ scale: scale }] }]}>
                        <Feather name='edit' style={tw`text-sm text-white`} />
                    </Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={showConfirmDialog}
                    style={tw`flex items-center justify-center w-[70px] bg-red-500`}
                >
                    <Animated.Text style={[{ transform: [{ scale: scale }] }]}>
                        <Ionicons name='trash-outline' style={tw`text-base text-white`} />
                    </Animated.Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={rightSwipe}
        >
            <BlogPopularItem item={item} />
        </Swipeable>
    )
}