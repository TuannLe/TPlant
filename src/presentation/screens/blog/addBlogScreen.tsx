import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import FormData from 'form-data'
import { useSelector } from 'react-redux'
import InputItem from '../../components/inputItem'
import SizedBoxItem from '../../components/sizedBoxItem'
import { COLOR } from '../../../constants'
import ButtonElevatedItem from '../../components/buttonElevatedItem'
import { createBlog } from '../../../core/apis/blogApi'
import { TabActions } from '@react-navigation/native'

export default function AddBlogScreen({ route, navigation }: any) {
    const images = route.params.image
    const jumpToAction = TabActions.jumpTo('BlogTab');
    const token = useSelector((state: any) => state.user.token)
    const currentUser = useSelector((state: any) => state.user.currentUser)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onPress = async () => {
        let formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('images', images)
        formData.append('created_by', currentUser.account_id)
        const res: any = await createBlog(token, formData)
        if (res.status == '200') {
            if (res.data == 'Create blog successfully') {
                console.log('hello')
                navigation.navigate('Root')
            }
        }
    }

    return (
        <View style={tw`w-full h-full flex flex-col`}>
            <Image source={{ uri: images.uri }} style={tw`w-full h-58`} resizeMode={'cover'} />
            <View style={tw`p-4 flex flex-col flex-1`}>
                <InputItem isSecureText={false} placeholder='Enter title' value={title} setValue={setTitle} />
                <SizedBoxItem width='0' height='4' />
                {/* <TextAreaItem
                    placeholder='Enter content'
                    value={content}
                    setValue={setContent}
                    numberOfLines={4}
                /> */}
                <TextInput
                    placeholder='Enter content'
                    value={content}
                    onChangeText={val => {
                        setContent(val)
                    }}
                    multiline={true}
                    numberOfLines={10}
                    style={[tw`px-3 py-4 flex-1 text-base text-[${COLOR.TEXT_BLACK}] border border-[${COLOR.BORDER_COLOR}] rounded bg-white`, { textAlignVertical: 'top' }]}
                />
                <SizedBoxItem width='0' height='8' />
                <ButtonElevatedItem onPress={onPress} text='Submit' />
            </View>
        </View>
    )
}