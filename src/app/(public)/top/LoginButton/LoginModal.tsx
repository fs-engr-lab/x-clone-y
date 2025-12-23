import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Form } from "@heroui/form";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from "@heroui/modal";

import { AppButton, AppInput, AppPasswordInput, LogoImage } from "@/app/components";
import { authClient } from "@/app/libs/auth-client";
import { useAPI } from "@/app/libs/hooks";


type Props = Required<Pick<ModalProps, "isOpen" | "onOpenChange">>;

export const LoginModal = ({ isOpen, onOpenChange }: Props) => {
    const router = useRouter();

    const { isLoading, request } = useAPI(
        async (formData: FormData) => {
            const data = Object.fromEntries(formData);
            const { error } = await authClient.signIn.username({
                username: data.id as string,
                password: data.password as string
            });

            let errorMessage = "";
            if (error) {
                console.error(error);
                switch (error.code) {
                    case "USERNAME_IS_INVALID":
                    case "INVALID_USERNAME_OR_PASSWORD":
                        errorMessage = "ID又はパスワードが不正です";
                        break;
                    case "EMAIL_NOT_VERIFIED":
                        errorMessage = "メールアドレスが未確認です。再度、ご登録いただいたメールアドレスに確認用メールを送信しました。メール内の確認リンクをクリックして下さい。";
                        break;
                    default:
                        errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
                }
            }
            return errorMessage;
        },
        () => {
            onOpenChange(false);
            router.push("/home");
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
                    <ModalBody className="flex flex-col items-center">
                        <div className="flex flex-col gap-4 w-lg">
                            <div className="font-bold text-3xl">Yにログイン</div>
                            <AppInput isRequired name="id" label="ID" />
                            <AppPasswordInput isRequired />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <AppButton className="w-lg" isLoading={isLoading} type="submit" variant="solid">
                            ログイン
                        </AppButton>
                    </ModalFooter>
                </Form>
            </ModalContent>
        </Modal>
    )
}
