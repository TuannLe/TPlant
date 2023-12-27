import { View, FlatList, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import Octicons from 'react-native-vector-icons/Octicons'
import { useSelector } from 'react-redux'
import BlogItem from '../../components/blog/blogItem'
import { COLOR } from '../../../constants'
import SizedBoxItem from '../../components/sizedBoxItem'
import { getBlogsPopular } from '../../../core/apis/blogApi'

export default function BlogScreen() {
    const [searchKey, setSearchKey] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const categories = [
        'All',
        'New',
        'Popular',
        'Save',
    ]
    const token = useSelector((state: any) => state.user.token)
    const blogs = useSelector((state: any) => state.blog.blogs)
    const blogsFavorite = useSelector((state: any) => state.blog.blogsFavorite)
    const [tempBlogs, setTempBlogs] = useState([])

    useEffect(() => {
        setTempBlogs(blogs)
    }, [blogs])

    const handleGetBlogsPopular = async () => {
        setLoading(true)
        const res: any = await getBlogsPopular(token)
        if (res.status == '200') {
            setLoading(false)
            if (res.data?.length) {
                setTempBlogs(res.data)
            }
        }
    }

    const handleFilter = (item: any) => {
        switch (item) {
            case 'All':
                setTempBlogs(blogs)
                break;
            case 'Popular':
                handleGetBlogsPopular()
                break;
            case 'New':
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setTempBlogs(blogs?.slice(0, 2))
                }, 500);
                break;
            case 'Save':
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setTempBlogs(blogsFavorite)
                }, 500);
                break;
            default:

        }
    }

    return (
        <View style={tw`w-full h-full flex flex-col`}>
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
                <View style={tw`flex flex-row bg-white rounded-xl`}>
                    {
                        categories.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        handleFilter(item)
                                        setSelectedIndex(index)
                                    }}
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
            {
                loading ? (
                    <View style={tw`flex-1 items-center justify-center`}>
                        <ActivityIndicator size="small" color="#067a50" />
                    </View>
                ) :
                    tempBlogs ? (
                        <FlatList
                            ItemSeparatorComponent={
                                () => (
                                    <SizedBoxItem width='0' height='4' />
                                )
                            }
                            data={tempBlogs}
                            renderItem={(item: any) => <BlogItem item={item.item} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={() => (
                                <SizedBoxItem width='0' height='4' />
                            )}
                            keyExtractor={(item: any) => item.article_id}
                        />
                    ) : null
            }
        </View>
    )
}