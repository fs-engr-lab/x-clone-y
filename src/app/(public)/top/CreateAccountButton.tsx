"use client";
import { TopButton } from "./common/TopButton";


export const CreateAccountButton = () => {
    const handlePress = () => {
        console.log("CreateAccountButton is clickded.");
    }

    return (
        <TopButton
            className="font-bold text-base"
            variant="solid"
            onPress={handlePress}
        >
            アカウントを作成
        </TopButton>
    )
}
