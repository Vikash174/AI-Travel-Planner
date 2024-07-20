import * as Device from "expo-device";
import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const isTablet = () => Device.deviceType === Device.DeviceType.TABLET;

export const isLandscape = ()=>{
    return width > height;
}

export const _isTab=()=>{
    return width > 700 && height > 700 ? true : false;
}