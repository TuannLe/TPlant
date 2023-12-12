import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../../../constants'
import SizedBoxItem from '../../components/sizedBoxItem'
import CommentItem from '../../components/blog/commentItem'

export default function BlogDetailScreen({ route, navigation }: any) {
    const item = route.params.item
    const [comment, setComment] = useState('')
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    const handleSave = () => {
        setSave(!save)
    }
    const data = [
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
    ]

    return (
        <View style={tw`flex w-full h-full justify-between`}>
            <View style={tw`relative w-full`}>
                <Image source={{ uri: item.image }} style={tw`w-full h-58 `} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[tw`absolute top-4 left-4 px-2.5 py-1.5 rounded-full`, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
                >
                    <Ionicons name='arrow-back' style={tw`text-2xl text-white`} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1`}>
                <View style={tw`bg-white px-4 pt-3`}>
                    <View style={tw`flex flex-row items-center`}>
                        <Image
                            source={{ uri: item.author_avt }}
                            style={tw`w-[50px] h-[50px] rounded-full`}
                            resizeMode={'stretch'}
                        />
                        <View style={tw`ml-4`}>
                            <Text style={tw`text-[${COLOR.PRIMARY_COLOR}] text-lg font-medium`}>{item.author_name}</Text>
                            <Text style={tw`text-[${COLOR.TEXT_GRAY}]`}>{item.date}</Text>
                        </View>
                    </View>
                    <SizedBoxItem width='0' height='4' />
                    <View>
                        <Text style={tw`text-[${COLOR.TEXT_BLACK}] text-lg font-medium`}>{item.title}</Text>
                        <Text style={tw`text-[${COLOR.TEXT_GRAY}] text-base`}>{item.description}</Text>
                    </View>
                    <SizedBoxItem width='0' height='3' />
                    <View style={tw`w-full h-[1px] bg-gray-200`} />
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
                </View>
                <View style={tw`p-4`}>
                    {/* <Text style={tw`text-base`}>No comments!</Text> */}
                    <FlatList
                        ItemSeparatorComponent={
                            () => (
                                <View style={tw`w-full h-[1px] bg-gray-200 my-2`} />
                            )
                        }
                        data={data}
                        renderItem={(item: any) => <CommentItem />}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={() => (
                            <SizedBoxItem width='0' height='46' />
                        )}
                    // keyExtractor={item => item.name}
                    />
                </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between px-4 py-2.5 bg-white`}>
                <TextInput
                    style={tw`flex-1 px-4 py-1.5 text-base rounded-md border border-[${COLOR.BORDER_COLOR}]`}
                    onChangeText={val => {
                        setComment(val)
                    }}
                    value={comment}
                    placeholder="Comment..."
                />
                <TouchableOpacity
                    style={tw`pl-3 py-1`}
                >
                    <Ionicons name='send' style={tw`text-2xl text-[${COLOR.PRIMARY_COLOR}]`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}