import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Octicons from 'react-native-vector-icons/Octicons'
import DiseaseItem from '../../components/disease/diseaseItem'
import { COLOR } from '../../../constants'
import SizedBoxItem from '../../components/sizedBoxItem'

export default function DiseaseScreen() {
    const data = [
        {
            image: 'https://cdnphoto.dantri.com.vn/fVMVyko7qiP6wWrJB3yVHD9ztfM=/zoom/1200_630/2022/01/04/comocombatirelminadordeloscitricos3054orig-crop-1641279526069.jpeg',
            name: 'Citrus leaf miner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            image: 'https://nongnghiepthuanthien.vn/wp-content/uploads/2020/09/benh-kham-do-vi-rus-min.jpg',
            name: 'Citrus leaf miner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            image: 'https://vuoncay.vn/wp-content/uploads/2023/03/nam-gay-benh-cay-trong-2.jpg.webp',
            name: 'Citrus leaf miner',
            description: 'description...',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkCZie3gUxh7XC1xF2xaiknlH-OzoLsCRZQ&usqp=CAU',
            name: 'Citrus leaf miner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            name: 'Citrus leaf miner',
            description: 'description...',
        },
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            name: 'Citrus leaf miner',
            description: 'description...',
        },

        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            name: 'Citrus leaf miner',
            description: 'description...',
        },
        {
            image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            name: 'Citrus leaf miner',
            description: 'description...',
        },
    ]
    const [searchKey, setSearchKey] = useState('')
    return (
        <View style={tw`p-4`}>
            <Text style={tw`text-2xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Diagnoses</Text>
            <SizedBoxItem width='0' height='3' />
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
            <FlatList
                ItemSeparatorComponent={
                    () => (
                        <SizedBoxItem width='0' height='4' />
                    )
                }
                data={data}
                renderItem={(item: any) => <DiseaseItem item={item.item} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <SizedBoxItem width='0' height='28' />
                )}
            // keyExtractor={item => item.name}
            />
        </View>
    )
}