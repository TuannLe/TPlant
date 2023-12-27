import { Alert } from "react-native";
import Toast from "react-native-root-toast";

export const formatDate = (inputDate: Date) => {
    const date = new Date(inputDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const validatePassword = (password: string) => {
    return passwordRegex.test(password);
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateEmail = (email: string) => {
    return emailRegex.test(email);
};

export const handleShowToastSuccess = (message: string) => {
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#1bb93f',
        textColor: 'white'
    });
}

export const handleShowToastWarning = (message: string) => {
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#1bb93f',
        textColor: 'white'
    });
}

export const handleShowToastError = (message: string) => {
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#1bb93f',
        textColor: 'white'
    });
}

export const showConfirmDialog = (actionDelete: any, actionShowToast: any) => {
    return Alert.alert(
        "Confirm",
        "Are you sure you want to delete item?",
        [
            {
                text: "Yes",
                onPress: () => {
                    actionDelete()
                    actionShowToast()
                    return
                }
            },
            {
                text: "No",
                onPress: () => {
                    return
                }
            }
        ]
    )
}