import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import WeatherItem from './weatherItem'
import SizedBoxItem from '../sizedBoxItem'
import { COLOR } from '../../../constants'

export default function WeatherToday() {
    const [temperature, setTemperature] = useState<number>(0)
    const [humidity, setHumidity] = useState<number>()
    const [windSpeed, setWindSpeed] = useState<number>()


    const handleGetDataWeather = async () => {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=16.0678&longitude=108.2208&current=temperature_2m,relative_humidity_2m,wind_speed_10m&forecast_days=1'
        const response = await fetch(url);
        const result = await response.json();
        const current = result.current;

        setTemperature(current.temperature_2m)
        setHumidity(current.relative_humidity_2m)
        setWindSpeed(current.wind_speed_10m)
    }

    useEffect(() => {
        handleGetDataWeather()
    }, [])

    return (
        // absolute top-42 left-0 right-0
        <View style={tw`mt-4 px-4`}>
            <Text style={tw`text-xl text-[${COLOR.TEXT_BLACK}] font-medium`}>Weather</Text>
            <SizedBoxItem width='0' height='2' />
            <View style={tw`flex flex-row justify-between`}>
                <WeatherItem
                    title='Temp'
                    data={Math.floor(temperature)}
                    unit='°C'
                    icon={<FontAwesome style={tw`text-2xl text-black`} name="thermometer-3" />}
                />
                <WeatherItem
                    title='Wind'
                    data={windSpeed}
                    unit='km/h'
                    icon={<Feather style={tw`text-2xl text-black`} name="wind" />}
                />
                <WeatherItem
                    title='Humidity'
                    data={humidity}
                    unit='%'
                    icon={<Ionicons style={tw`text-2xl text-black`} name="water-outline" />}
                />
            </View>
        </View>
    )
}