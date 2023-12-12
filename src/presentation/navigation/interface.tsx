

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackPramList { }
    }
}

export type RootStackPramList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    BlogDetailScreen: undefined;
    DiseaseDetailScreen: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackPramList> = NativeStackScreenProps<
    RootStackPramList,
    Screen
>;

export type RootTabParamList = {
    HomeTab: undefined;
    BlogTab: undefined;
    ScanTab: undefined;
    ProfileTab: undefined;
    DiseaseTab: undefined;
    LoginTab: undefined;
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackPramList>
>;