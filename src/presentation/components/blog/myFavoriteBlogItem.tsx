import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image } from 'react-native'
import { COLOR } from '../../../constants'
import { formatDate, showConfirmDialog } from '../../../util'
import { Swipeable } from 'react-native-gesture-handler'
import BlogPopularItem from '../home/blogPopularItem'

export default function MyFavoriteBlogItem({ item }: any) {
    const navigation = useNavigation()
    const rightSwipe = (progress: any, dragY: any) => {
        const scale = dragY.interpolate({
            inputRange: [0, 200],
            outputRange: [1, 0],
            // extrapolate: 'clamp'
        })
        return (
            <View style={tw`flex flex-row`}>
                <TouchableOpacity
                    // DeleteFavoriteBlog
                    // onPress={showConfirmDialog(

                    // )}
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