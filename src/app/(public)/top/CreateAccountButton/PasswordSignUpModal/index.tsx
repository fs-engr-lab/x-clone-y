import { FormEvent } from "react";
import { Form, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from "@heroui/react";

import { AppButton, AppInput, LogoImage } from "@/app/components";
import { authClient } from "@/app/libs/auth-client";
import { addSuccessToast } from "@/app/libs/hero";
import { useAPI } from "@/app/libs/hooks";
import { IDInput } from "../../IDInput";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";


type Props = Required<Pick<ModalProps, "isOpen" | "onOpenChange">>;

export const PasswordSignUpModal = ({ isOpen, onOpenChange }: Props) => {

    const { isLoading, request } = useAPI(
        async (formData: FormData) => {
            const data = Object.fromEntries(formData);
            const { error } = await authClient.signUp.email({
                name: data.id as string,
                username: data.id as string,
                displayUsername: data.username as string,
                email: data.email as string,
                password: data.password as string,
            });

            let errorMessage = "";
            if (error) {
                console.error(error);
                switch (error.code) {
                    case "USERNAME_IS_ALREADY_TAKEN_PLEASE_TRY_ANOTHER":
                        errorMessage = "同一のIDが既に使われています。別のIDで登録して下さい。";
                        break;
                    default:
                        errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
                }
            }
            return errorMessage;
        },
        () => {
            addSuccessToast(
                "アカウントが作成されました",
                "ご登録いただいたメールアドレスに確認用メールを送信しました。メール内の「メールアドレスの確認」リンクをクリックして下さい。"
            );
            onOpenChange(false);
        }
    );

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await request(new FormData(event.currentTarget));
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
