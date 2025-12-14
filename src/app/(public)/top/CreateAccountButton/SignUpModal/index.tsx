import { FormEvent, useState } from "react";
import { Form } from "@heroui/form";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from "@heroui/modal";

import { AppButton, AppInput, LogoImage } from "@/app/components";
import { IDInput } from "./IDInput";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { authClient } from "@/app/libs/auth-client";
import { addSuccessToast, addErrorToast } from "@/app/libs/hero";


type Props = Required<Pick<ModalProps, "isOpen" | "onOpenChange">>;

export const SignUpModal = ({ isOpen, onOpenChange }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const { error } = await authClient.signUp.email({
            name: data.id as string,
            username: data.id as string,
            displayUsername: data.username as string,
            email: data.email as string,
            password: data.password as string,
        });
        setIsLoading(false);

        if (error) {
            console.error(error);
            let description = "予期せぬエラーが発生しています。";
            switch (error.code) {
                case "USERNAME_IS_ALREADY_TAKEN_PLEASE_TRY_ANOTHER":
                    description = "同一のIDが既に使われています。別のIDで登録して下さい。";
                    break;
            }
            addErrorToast("エラーが発生しました", description);

        } else {
            addSuccessToast(
                "アカウントが作成されました",
                "ご登録いただいたメールアドレスに確認用メールを送信しました。メール内の「メールアドレスの確認」リンクをクリックして下さい。"
            );
            onOpenChange(false);
        }
    }

    return (
        <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <Form onSubmit={handleSubmit} className="flex items-center">
                    <ModalHeader>
                        <LogoImage size={32} />
                    </ModalHeader>
                    <ModalBody className="flex flex-col items-center gap-8">
                        <div className="font-bold text-3xl">アカウントを作成</div>
                        <div className="flex flex-col gap-1 w-lg">
                            <IDInput />
                            <AppInput isRequired name="username" label="名前" />
                            <EmailInput />
                            <PasswordInput />
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
