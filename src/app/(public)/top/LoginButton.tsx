"use client";
import { TopButton } from "./common/TopButton";


export const LoginButton = () => {
    const handlePress = () => {
        console.log("LoginButton is clickded.");
    }

    return (
        <TopButton variant="bordered" onPress={handlePress}>
            ログイン
        </TopButton >
    )
}
