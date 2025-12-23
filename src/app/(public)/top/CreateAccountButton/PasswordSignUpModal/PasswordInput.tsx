"use client";
import { AppPasswordInput } from "@/app/components";


const ESCAPED_SYMBOLS = `!@#$%^&*\\(\\)_\\+\\-=\\[\\]\\{\\}\\|;:'",\\.<>\\/\\?~`;
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?~";

export const PasswordInput = () => {
    return (
        <AppPasswordInput
            isRequired
            errorMessage={`パスワードは8～24文字で、小文字、大文字、数字、記号(${SYMBOLS})をそれぞれ1文字以上含めてください。`}
            minLength={8}
            maxLength={24}
            pattern={`^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[${ESCAPED_SYMBOLS}])[A-Za-z\\d${ESCAPED_SYMBOLS}]+$`}
        />
    )
}
