"use client";
import { useDisclosure } from "@heroui/modal";
import { AppButton } from "@/app/components";
import { SignUpModal } from "./SignUpModal";


export const CreateAccountButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (<>
        <AppButton
            className="w-xs bg-white font-bold text-base  text-black"
            variant="solid"
            onPress={onOpen}
        >
            アカウントを作成
        </AppButton>
        <SignUpModal
            key={isOpen ? "opened" : "closed"}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        />
    </>)
}
