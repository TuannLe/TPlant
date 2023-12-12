import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import tw from 'twrnc'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Camera, CameraCaptureError, useCameraDevice } from 'react-native-vision-camera'
import { launchImageLibrary } from 'react-native-image-picker'
import SizedBoxItem from '../components/sizedBoxItem'
import { COLOR } from '../../constants'

export default function ScanScreen() {
    const device = useCameraDevice('back')
    const camera = useRef<Camera>(null)
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const checkPermission = async () => {
        const newCameraPermissions = await Camera.requestCameraPermission()
        const newMicrophonePermissions = await Camera.requestMicrophonePermission()
    }
    useEffect(() => {
        checkPermission()
    }, [])

    const handleTakePicture = async () => {
        if (camera != null) {
            const photo = await camera.current.takePhoto({
                qualityPrioritization: 'speed',
                flash: 'off',
                enableShutterSound: false
            })
            setLoading(false)
            setImage(photo.path)
        }
    }

    const handleImagePicker = () => {
        let options = {
            storageOptions: {
                path: 'image'
            }
        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImage(imageUri);
            }
        })
    }

    useEffect(() => {
        console.log(loading)
    }, [loading])
    if (device == null) return <ActivityIndicator />
    return (
        <View style={tw`w-full h-full flex`}>
            {
                image ?
                    <>
                        <Image source={{ uri: 'file://' + image }} style={tw`w-full flex-1`} />
                        <View style={tw`h-[100px] bg-black px-4 flex flex-row justify-around items-center`}>
                            <TouchableOpacity
                                onPress={() => setImage('')}
                                style={tw`p-2`}
                            >
                                <Ionicons name='close-outline' style={tw`text-5xl text-white`} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { }}
                            >
                                <Ionicons name='checkmark-circle-outline' style={tw`text-7xl text-white`} />
                            </TouchableOpacity>
                            <SizedBoxItem width="16" height="0" />
                        </View>
                    </>
                    :
                    <>
                        <Camera
                            ref={camera}
                            style={tw`w-full flex-1`}
                            device={device}
                            isActive={true}
                            photo
                        />
                        <View style={tw`h-[100px] bg-black px-4 flex flex-row justify-around items-center`}>
                            {
                                !loading ? (
                                    <>
                                        <TouchableOpacity
                                            onPress={handleImagePicker}
                                            style={tw`p-2`}
                                        >
                                            <FontAwesome6 name='image' style={tw`text-4xl text-white`} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setLoading(true)
                                                handleTakePicture()
                                            }}
                                            style={tw`border-[3px] border-white px-[3px] rounded-full`}
                                        >
                                            <FontAwesome name='circle' style={tw`text-6xl text-white`} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={tw`p-2`}
                                        >
                                            <Ionicons name='help-circle-outline' style={tw`text-5xl text-white`} />
                                        </TouchableOpacity>
                                    </>
                                ) : (
                                    <ActivityIndicator size={46} color="white" />
                                )
                            }
                        </View>
                    </>
            }
        </View>
    )
}