import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'
import BlogPopularItem from './blogPopularItem'
import SizedBoxItem from '../sizedBoxItem'
import { TabActions, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { BlogInterface } from '../../../core/redux/interfaces/blogInterface'

export default function BlogPopular() {
    const navigation = useNavigation()
    const jumpToAction = TabActions.jumpTo('BlogTab');
    const blogs = useSelector((state: any) => state.blog.blogs)

    return (
        <View style={tw`px-4`}>
            <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`text-xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Blogs</Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(jumpToAction)}
                    style={tw`pl-4`}
                >
                    <Text style={tw`text-base text-[${COLOR.PRIMARY_COLOR}]`}>View all</Text>
                </TouchableOpacity>
            </View>
            <SizedBoxItem width='0' height='4' />
            <View>
                {
                    blogs?.length ? (
                        blogs.slice(0, 2).map((item: BlogInterface, index: any) => {
                            return (
                                <View key={item.article_id}>
                                    <BlogPopularItem item={item} />
                                    <SizedBoxItem width='0' height='4' />
                                </View>
                            )
                        })
                    ) : null
                }
            </View>
        </View>
    )
}