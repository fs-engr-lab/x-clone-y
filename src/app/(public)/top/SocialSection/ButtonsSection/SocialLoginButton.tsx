"use client";
import { ReactNode } from "react";
import { User } from "@heroui/react";

import { AppButton } from "@/app/components";
import { authClient } from "@/app/libs/auth-client";
import { useAPI } from "@/app/libs/hooks";
import { LastLoginUser } from "@/app/types";


type Props = {
    provider: string;
    icon: ReactNode;
    user?: LastLoginUser;
}

export const SocialLoginButton = ({ provider, icon, user }: Props) => {

    const { isLoading, request } = useAPI(async () => {
        const { error } = await authClient.signIn.social({
            provider,
            callbackURL: "/home",
            newUserCallbackURL: "/top",
        });

        let errorMessage = "";
        if (error) {
            console.error(error);
            errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
        }

        return errorMessage;
    });

    return user && user.provider === provider ? (
        <AppButton
            className="w-xs bg-white text-black text-base"
            variant="solid"
            isLoading={isLoading}
            endContent={icon}
            onPress={request}
        >
            <User
                classNames={{ name: "max-w-[200px] truncate", description: "max-w-[200px] truncate" }}
                avatarProps={{ className: "w-6 h-6 text-tiny", src: user.image }}
                name={`${user.name}でログイン`}
                description={user.email}
            />
        </AppButton>
    ) : (
        <AppButton
            className="w-xs bg-white text-black text-base"
            variant="solid"
            isLoading={isLoading}
            spinnerPlacement="end"
            startContent={icon}
            onPress={request}
        >
            {`${provider.charAt(0).toUpperCase() + provider.slice(1)}で登録`}
        </AppButton>
    )
}
