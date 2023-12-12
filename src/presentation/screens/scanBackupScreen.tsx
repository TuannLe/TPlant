import { View, Text, TouchableOpacity, Image, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import tw from 'twrnc'
import { COLOR } from '../../constants';
import SizedBoxItem from '../components/sizedBoxItem';

export default function ScanBackupScreen() {
    const [selectedImage, setSelectedImage] = useState('')

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
                setSelectedImage(imageUri);
            }
        })
    }
    const handleCameraLaunch = async () => {
        try {
            const checkPermissions = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if (checkPermissions == PermissionsAndroid.RESULTS.GRANTED) {
                const result = await launchCamera({ mediaType: 'photo', cameraType: 'back' });
                if (result.didCancel) {
                    console.log('User cancelled camera');
                } else if (result.error) {
                    console.log('Camera Error: ', result.error);
                } else {
                    let imageUri = result.uri || result.assets?.[0]?.uri;
                    setSelectedImage(imageUri);
                }
            } else {
                console.log('no ok')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={tw`w-full h-full flex justify-center`}>
            <View>
                {
                    selectedImage != '' ? (
                        <Image style={tw`w-full h-[300px]`} source={{ uri: selectedImage }} />
                    ) : null
                }
            </View>

            <TouchableOpacity
                style={tw`p-3 bg-[${COLOR.PRIMARY_COLOR}]`}
                onPress={handleImagePicker}
            >
                <Text style={tw`text-white text-base`}>
                    Image picker
                </Text>
            </TouchableOpacity>
            <SizedBoxItem height='8' />
            <TouchableOpacity
                style={tw`p-3 bg-[${COLOR.PRIMARY_COLOR}]`}
                onPress={handleCameraLaunch}
            >
                <Text style={tw`text-white text-base`}>
                    Open Camera
                </Text>
            </TouchableOpacity>
        </View>
    )
}