import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import CommentItem from './commentItem'
import SizedBoxItem from '../sizedBoxItem'

export default function SectionListComment() {
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
    )
}