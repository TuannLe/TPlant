import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLOR } from '../../constants'
import bg from '../../assets/images/bg_login.jpg'
import InputItem from '../components/inputItem'
import SizedBoxItem from '../components/sizedBoxItem'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={bg} resizeMode="cover" style={tw`w-full h-full flex justify-end`}>
            <View style={tw`px-4 py-16`}>
                <View>
                    <Text style={tw`text-3xl text-[${COLOR.ACCENT_COLOR}]`}>Hello</Text>
                    <Text style={tw`text-4xl font-medium text-white`}>Let's grow together!</Text>
                </View>
                <SizedBoxItem width='0' height='32' />
                <View>
                    <InputItem isSecureText={false} placeholder='Enter your email' />
                    <SizedBoxItem width='0' height='6' />
                    <InputItem isSecureText={true} placeholder='Enter your password' />
                    <SizedBoxItem width='0' height='3' />
                    <View style={tw`flex items-end`}>
                        <TouchableOpacity
                            style={tw`py-1.5`}
                        >
                            <Text style={tw`text-base text-white`}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SizedBoxItem width='0' height='12' />
                <View>
                    <TouchableOpacity
                        style={tw`py-3 rounded-md bg-[${COLOR.PRIMARY_COLOR}]`}
                    >
                        <Text style={tw`text-lg text-center text-white font-medium`}>Login</Text>
                    </TouchableOpacity>
                    <SizedBoxItem width='0' height='6' />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RegisterScreen')}
                        style={tw`py-3 rounded-md bg-[${COLOR.ACCENT_COLOR}] flex flex-row items-center justify-center`}
                    >
                        <Text style={tw`text-lg text-[${COLOR.PRIMARY_COLOR}]`}>Don't have an account?</Text>
                        <Text style={tw`text-lg text-[${COLOR.PRIMARY_COLOR}] font-medium`}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}