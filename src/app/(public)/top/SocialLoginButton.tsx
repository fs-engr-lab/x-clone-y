"use client";
import { ReactNode } from "react";
import { AppButton } from "@/app/components";


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
        <AppButton
            className="w-xs bg-white text-black text-base"
            variant="solid"
            isDisabled
            startContent={icon}
            onPress={handlePress}
        >
            {label}
        </AppButton>
    )
}
