import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import tw from 'twrnc'
import SizedBoxItem from '../../components/sizedBoxItem'
import BlogPopularItem from '../../components/home/blogPopularItem'
import { COLOR } from '../../../constants'
import HeaderScreenItem from '../../components/headerScreenItem'
import MyFavoriteBlogItem from '../../components/blog/myFavoriteBlogItem'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function MyFavoriteBlogScreen({ navigation }: any) {
    const blogs = useSelector((state: any) => state.blog.blogsFavorite)

    return (
        <View style={tw`w-full h-full flex flex-col`}>
            <HeaderScreenItem title='My favorite blogs' />
            <GestureHandlerRootView style={tw`flex-1 p-4`}>
                {
                    blogs.length ? (
                        <FlatList
                            ItemSeparatorComponent={
                                () => (
                                    <SizedBoxItem width='0' height='4' />
                                )
                            }
                            data={blogs}
                            renderItem={(item: any) => <MyFavoriteBlogItem item={item.item} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={() => (
                                <SizedBoxItem width='0' height='16' />
                            )}
                            keyExtractor={item => item.article_id}
                        />
                    ) : (
                        <View style={tw`flex flex-1 items-center justify-center`}>
                            <Text style={tw`text-base`}>You don't have any favorite blogs yet</Text>
                        </View>
                    )
                }
            </GestureHandlerRootView>
        </View>
    )
}