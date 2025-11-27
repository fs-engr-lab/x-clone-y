"use client";
import { ReactNode } from "react";
import { TopButton } from "./common/TopButton";


type Props = {
    provider: string;
    label: string;
    icon: ReactNode;
}

export const SocialLoginButton = ({ provider, label, icon }: Props) => {

    const handlePress = () => {
        console.log(`SocialLoginButton is clickded. provider=${provider}`);
    }

    return (
        <TopButton
            variant="solid"
            startContent={icon}
            onPress={handlePress}
        >
            {label}
        </TopButton>
    )
}
