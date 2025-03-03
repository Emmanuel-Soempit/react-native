import Toast from "react-native-toast-message"

export const successToast = (message:string, extra?:string) => {
    Toast.show({
        type: 'success',
        position: 'top',
        text1: message,
        text2: extra
    })
}

export const failureToast = (message:string, extra?:string) => {
    Toast.show({
        type: 'error',
        position: 'top',
        text1: message,
        text2: extra
    })
}

export const infoToast = (message:string, extra?:string) => {
    Toast.show({
        type: 'info',
        position: 'top',
        text1: message,
        text2: extra
    })
}