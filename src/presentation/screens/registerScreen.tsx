import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SizedBoxItem from '../components/sizedBoxItem'
import { COLOR } from '../../constants'
import InputItem from '../components/inputItem'

export default function RegisterScreen({ navigation }: any) {
    const bg = 'https://res.cloudinary.com/clock/image/upload/v1702390952/TPlant/ugbt6yz73siptqbpdhey.webp'
    return (
        <ImageBackground source={{ uri: bg }} resizeMode="cover" style={tw`w-full h-full flex justify-end`}>
            <View style={tw`px-4 py-16`}>
                <View>
                    <Text style={tw`text-3xl text-[${COLOR.ACCENT_COLOR}]`}>Hello</Text>
                    <Text style={tw`text-4xl font-medium text-white`}>Create a free account!</Text>
                </View>
                <SizedBoxItem width='0' height='32' />
                <View>
                    <InputItem isSecureText={false} placeholder='Enter your email' />
                    <SizedBoxItem width='0' height='6' />
                    <InputItem isSecureText={true} placeholder='Enter your password' />
                    <SizedBoxItem width='0' height='6' />
                    <InputItem isSecureText={true} placeholder='Repeat your password' />
                </View>
                <SizedBoxItem width='0' height='12' />
                <View>
                    <TouchableOpacity
                        style={tw`py-3 rounded-md bg-[${COLOR.PRIMARY_COLOR}]`}
                    >
                        <Text style={tw`text-lg text-center text-white font-medium`}>Register</Text>
                    </TouchableOpacity>
                    <SizedBoxItem width='0' height='6' />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={tw`py-3 rounded-md bg-[${COLOR.ACCENT_COLOR}] flex flex-row items-center justify-center`}
                    >
                        <Text style={tw`text-lg text-[${COLOR.PRIMARY_COLOR}]`}>Already have an account?</Text>
                        <Text style={tw`text-lg text-[${COLOR.PRIMARY_COLOR}] font-medium`}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}