import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../../../constants'
import MyBlogItem from '../../components/blog/myBlogItem'
import SizedBoxItem from '../../components/sizedBoxItem'
import { useSelector } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HeaderScreenItem from '../../components/headerScreenItem'

export default function MyBlogScreen({ navigation }: any) {
    const blogs = useSelector((state: any) => state.blog.blogs)

    return (
        <View style={tw`w-full h-full flex flex-col`}>
            <HeaderScreenItem title='My blogs' />
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
                            renderItem={(item: any) => <MyBlogItem item={item.item} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            // ListHeaderComponent={() => (
                            //     <SizedBoxItem width='0' height='4' />
                            // )}
                            ListFooterComponent={() => (
                                <SizedBoxItem width='0' height='16' />
                            )}
                            keyExtractor={item => item.article_id}
                        />
                    ) : (
                        <View style={tw`flex flex-1 items-center justify-center`}>
                            <Text style={tw`text-base`}>You don't have any blogs yet</Text>
                        </View>
                    )
                }
            </GestureHandlerRootView>
        </View>
    )
}