import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Form } from "@heroui/form";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from "@heroui/modal";

import { AppButton, AppInput, AppPasswordInput, LogoImage } from "@/app/components";
import { authClient } from "@/app/libs/auth-client";
import { addErrorToast } from "@/app/libs/hero";
import { TopLink } from '../TopLink';


type Props = Required<Pick<ModalProps, "isOpen" | "onOpenChange">>;

export const LoginModal = ({ isOpen, onOpenChange }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const { error } = await authClient.signIn.username({
            username: data.id as string,
            password: data.password as string
        });
        setIsLoading(false);

        if (error) {
            console.error(error);
            let description = "予期せぬエラーが発生しました。";
            switch (error.code) {
                case "USERNAME_IS_INVALID":
                case "INVALID_USERNAME_OR_PASSWORD":
                    description = "ID又はパスワードが不正です";
                    break;
                case "EMAIL_NOT_VERIFIED":
                    description = "メールアドレスが未確認です。再度、ご登録いただいたメールアドレスに確認用メールを送信しました。メール内の確認リンクをクリックして下さい。";
                    break;
            }
            addErrorToast("エラーが発生しました", description);

        } else {
            onOpenChange(false);
            router.push("/home");
        }
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
