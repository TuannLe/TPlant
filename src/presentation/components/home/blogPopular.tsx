import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../../constants'
import BlogPopularItem from './blogPopularItem'
import SizedBoxItem from '../sizedBoxItem'
import { TabActions, useNavigation } from '@react-navigation/native'

export default function BlogPopular() {
    const navigation = useNavigation()
    const jumpToAction = TabActions.jumpTo('BlogTab');

    const data = [
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            author_avt: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg',
            author_name: 'tuanle',
            date: '20-10-2023',
            title: 'hello tile',
            description: 'description',
        },
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            author_avt: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg',
            author_name: 'tuanle',
            date: '20-10-2023',
            title: 'hello tile2',
            description: 'description',
        },
    ]
    return (
        <View style={tw`px-4`}>
            <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`text-xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Popular</Text>
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
                    data.length ? (
                        data.map((item, index) => {
                            return (
                                <BlogPopularItem key={index} item={item} />
                            )
                        })
                    ) : null
                }
                {/* {
                    data.length ? (
                        <FlatList
                            ItemSeparatorComponent={
                                () => (
                                    <View
                                        style={tw`w-4`}
                                    />
                                )
                            }
                            data={data}
                            renderItem={(item: any) => <BlogPopularItem item={item.item} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.title}
                        />
                    ) : null
                } */}
            </View>
        </View>
    )
}