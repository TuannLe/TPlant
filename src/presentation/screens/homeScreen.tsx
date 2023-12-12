import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import image from '../../assets/images/farm1.jpeg'
import WeatherToday from '../components/home/weatherToday'
import { COLOR } from '../../constants'
import SizedBoxItem from '../components/sizedBoxItem'
import BlogPopular from '../components/home/blogPopular'
import { TabActions, useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()
    const jumpToAction = TabActions.jumpTo('ScanTab');
    return (
        <ScrollView>
            <View>
                <View>
                    <Image
                        source={image}
                        style={tw`w-full h-50`}
                        resizeMode={'cover'}
                    />
                    <View style={[tw`absolute top-0 right-0 left-0 bottom-0 pl-4 pt-8`, { backgroundColor: 'rgba(0,0,0,0.4)' }]}>
                        <Text
                            style={tw`text-white text-xl`}
                        >
                            My garden
                        </Text>
                        <Text style={tw`mt-2 text-white text-3xl font-medium`}>Username</Text>
                    </View>
                </View>
            </View>
            <WeatherToday />
            <View style={tw`p-4`}>
                <Text style={tw`text-xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Heal your crop</Text>
                <SizedBoxItem width='0' height='2' />
                <View style={tw`p-4 bg-white rounded-lg shadow-lg`}>
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <View style={tw`flex items-center`}>
                            <AntDesign name='scan1' style={tw`text-5xl text-[${COLOR.TEXT_GRAY}]`} />
                            <Text style={tw`text-sm text-[${COLOR.TEXT_BLACK}]`}>Take a picture</Text>
                        </View>
                        <MaterialIcons name='arrow-forward-ios' style={tw`text-2xl -mt-6 text-[${COLOR.TEXT_GRAY}]`} />
                        <View style={tw`flex items-center`}>
                            <Entypo name='news' style={tw`text-5xl text-[${COLOR.TEXT_GRAY}]`} />
                            <Text style={tw`text-sm text-[${COLOR.TEXT_BLACK}]`}>See diagnosis</Text>
                        </View>
                        <MaterialIcons name='arrow-forward-ios' style={tw`text-2xl -mt-6 text-[${COLOR.TEXT_GRAY}]`} />
                        <View style={tw`flex items-center`}>
                            <MaterialCommunityIcons name='bottle-tonic-plus-outline' style={tw`text-5xl text-[${COLOR.TEXT_GRAY}]`} />
                            <Text style={tw`text-sm text-[${COLOR.TEXT_BLACK}]`}>Get medicine</Text>
                        </View>
                    </View>
                    <SizedBoxItem width='0' height='6' />
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(jumpToAction)}
                        style={tw`p-2.5 bg-[${COLOR.PRIMARY_COLOR}] rounded-full`}
                    >
                        <Text style={tw`text-xl text-white font-medium text-center`}>Take a picture</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BlogPopular />
        </ScrollView >
    )
}