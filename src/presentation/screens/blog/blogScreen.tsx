import { View, FlatList, Text, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Octicons from 'react-native-vector-icons/Octicons'
import BlogItem from '../../components/blog/blogItem'
import { COLOR } from '../../../constants'
import CategoryItem from '../../components/blog/categoryItem'
import SizedBoxItem from '../../components/sizedBoxItem'

export default function BlogScreen() {
    const [searchKey, setSearchKey] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const data = [
        {
            image: 'https://cdnphoto.dantri.com.vn/fVMVyko7qiP6wWrJB3yVHD9ztfM=/zoom/1200_630/2022/01/04/comocombatirelminadordeloscitricos3054orig-crop-1641279526069.jpeg',
            author_avt: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg',
            author_name: 'tuanle',
            date: '20-10-2023',
            title: 'Citrus leaf miner',
            description: 'Leaf deformation - twisted or curled appearance',
        },
        {
            image: 'https://nongnghiepthuanthien.vn/wp-content/uploads/2020/09/benh-kham-do-vi-rus-min.jpg',
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
            title: 'hello tile',
            description: 'description',
        },
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
            title: 'hello tile',
            description: 'description',
        },
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            author_avt: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg',
            author_name: 'tuanle',
            date: '20-10-2023',
            title: 'hello tile',
            description: 'description',
        },

    ]
    const categories = [
        'All',
        'New',
        'Popular',
        'Save',
    ]
    return (
        <View>
            <View style={tw`p-4`}>
                <View style={tw`border border-gray-300 rounded flex flex-row items-center`}>
                    <TextInput
                        style={tw`flex-1 px-4 text-base text-black`}
                        onChangeText={val => {
                            setSearchKey(val)
                        }}
                        value={searchKey}
                        placeholder="Search..."
                        placeholderTextColor='#6b7280'
                    />
                    <Octicons name='search' style={tw`text-xl px-4 text-gray-400`} />
                </View>
                <SizedBoxItem width='0' height='4' />
                {/* <View style={tw`px-4`}>
                <FlatList
                    ItemSeparatorComponent={
                        () => (
                            <View
                                style={tw`w-4`}
                            />
                        )
                    }
                    data={categories}
                    renderItem={(item: any) => <CategoryItem item={item.item} />}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item}
                />
            </View> */}
                <View style={tw`flex flex-row bg-white rounded-xl`}>
                    {
                        categories.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedIndex(index)}
                                    key={index}
                                    style={tw`flex-1 ${selectedIndex == index ? `bg-[${COLOR.ACCENT_COLOR}]` : ''} rounded-xl py-2`}
                                >
                                    <Text style={tw`text-center text-[${COLOR.TEXT_BLACK}] text-base`}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <FlatList
                ItemSeparatorComponent={
                    () => (
                        <SizedBoxItem width='0' height='4' />
                    )
                }
                data={data}
                renderItem={(item: any) => <BlogItem item={item.item} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <SizedBoxItem width='0' height='38' />
                )}
            // keyExtractor={item => item.name}
            />
        </View>
    )
}