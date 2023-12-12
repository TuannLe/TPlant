import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../constants'
import SizedBoxItem from '../components/sizedBoxItem';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const token = ''
    return (
        <View style={tw`w-full h-full flex`}>
            {
                token ? (
                    <>
                        <View style={tw`p-4 bg-[${COLOR.PRIMARY_COLOR}]`}>
                            <View style={tw`flex flex-row items-center justify-between`}>
                                <Text style={tw`text-2xl text-white font-medium`}>Profile</Text>
                                <TouchableOpacity
                                    style={tw`pl-3`}
                                >
                                    <Ionicons name='settings-outline' style={tw`text-2xl text-white`} />
                                </TouchableOpacity>
                            </View>
                            <SizedBoxItem width='0' height='4' />
                            <View style={tw`flex flex-row items-center`}>
                                <Image source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} style={tw`w-[60px] h-[60px] rounded-full`} />
                                <View style={tw`flex-1 px-4`}>
                                    <Text style={tw`text-xl text-white font-medium`}>username</Text>
                                    <Text style={tw`text-base text-white`}>email</Text>
                                </View>
                            </View>
                        </View>
                        <View style={tw`flex-1 p-4`}>
                            <TouchableOpacity
                                style={tw`flex flex-row px-4 py-2.5 bg-white shadow-md rounded-lg items-center justify-between`}
                            >
                                <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>Personal information</Text>
                                <AntDesign name='right' style={tw`text-xl text-gray-400`} />
                            </TouchableOpacity>
                            <SizedBoxItem width='0' height='4' />
                            <TouchableOpacity
                                style={tw`flex flex-row px-4 py-2.5 bg-white shadow-md rounded-lg items-center justify-between`}
                            >
                                <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>My favorite</Text>
                                <AntDesign name='right' style={tw`text-xl text-gray-400`} />
                            </TouchableOpacity>
                            <SizedBoxItem width='0' height='4' />
                            <TouchableOpacity
                                style={tw`flex flex-row px-4 py-2.5 bg-white shadow-md rounded-lg items-center justify-between`}
                            >
                                <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>Dark theme</Text>
                                <AntDesign name='right' style={tw`text-xl text-gray-400`} />
                            </TouchableOpacity>
                            <SizedBoxItem width='0' height='4' />
                            <TouchableOpacity
                                style={tw`flex flex-row px-4 py-2.5 bg-white shadow-md rounded-lg items-center justify-between`}
                            >
                                <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>Setting</Text>
                                <AntDesign name='right' style={tw`text-xl text-gray-400`} />
                            </TouchableOpacity>
                            <SizedBoxItem width='0' height='4' />
                            <TouchableOpacity
                                style={tw`flex flex-row px-4 py-2.5 bg-white shadow-md rounded-lg items-center justify-between`}
                            >
                                <Text style={tw`text-base text-[${COLOR.TEXT_BLACK}]`}>Support</Text>
                                <AntDesign name='right' style={tw`text-xl text-gray-400`} />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`p-4`}>
                            <TouchableOpacity

                                style={tw`py-2 border border-red-500 rounded-lg`}
                            >
                                <Text style={tw`text-red-500 text-base font-medium text-center`}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={tw`w-full h-full flex justify-center px-4`}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={tw`py-2 bg-[${COLOR.PRIMARY_COLOR}] rounded-lg`}
                        >
                            <Text style={tw`text-white text-base font-medium text-center`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}