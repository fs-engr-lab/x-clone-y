"use client";
import { useDisclosure } from "@heroui/react";
import { AppButton } from "@/app/components";
import { LoginModal } from "./LoginModal";


export const LoginButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (<>
        <AppButton className="w-xs" variant="bordered" onPress={onOpen}>
            ログイン
        </AppButton>
        <LoginModal
            key={isOpen ? "opened" : "closed"}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        />
    </>)
}
