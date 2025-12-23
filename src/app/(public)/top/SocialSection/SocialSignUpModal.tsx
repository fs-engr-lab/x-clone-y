"use client";
import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import { User } from "better-auth";
import { Form, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";

import { AppButton, AppInput, LogoImage } from "@/app/components";
import { authClient } from "@/app/libs/auth-client";
import { useAPI } from "@/app/libs/hooks";
import { IDInput } from "../IDInput";


type Props = {
    user?: User;
}

export const SocialSignUpModal = ({ user }: Props) => {
    const [isOpen, setIsOpen] = useState(!!user);

    const { isLoading, request } = useAPI(
        async (formData: FormData) => {
            const data = Object.fromEntries(formData);
            const { error, data: availableData } = await authClient.isUsernameAvailable({
                username: data.id as string
            });

            let errorMessage = "";
            if (error) {
                console.error(error);
                errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
            } else if (availableData.available) {
                const { error } = await authClient.updateUser({
                    username: data.id as string,
                    displayUsername: data.username as string,
                });

                if (error) {
                    console.error(error);
                    errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
                }
            } else {
                errorMessage = "同一のIDが既に使われています。別のIDで登録して下さい。";
            }

            return errorMessage;
        },
        () => {
            setIsOpen(false);
            redirect("/home");
        }
    );

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await request(new FormData(event.currentTarget));
    }

    return (
        <Modal size="2xl" hideCloseButton isDismissable={false} isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalContent>
                <Form onSubmit={handleSubmit} className="flex items-center">
                    <ModalHeader>
                        <LogoImage size={32} />
                    </ModalHeader>
                    <ModalBody className="flex flex-col items-center gap-8">
                        <div className="font-bold text-3xl">
                            <div>アカウントを作成</div>
                        </div>
                        <div className="flex flex-col gap-1 w-lg">
                            <AppInput isDisabled name="email" label="メールアドレス" defaultValue={user?.email} />
                            <IDInput defaultValue={user?.email.slice(0, 15)} />
                            <AppInput isRequired name="username" label="名前" defaultValue={user?.name} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <AppButton className="w-lg" isLoading={isLoading} type="submit" variant="solid">
                            作成
                        </AppButton>
                    </ModalFooter>
                </Form>
            </ModalContent>
        </Modal>
    )
}
