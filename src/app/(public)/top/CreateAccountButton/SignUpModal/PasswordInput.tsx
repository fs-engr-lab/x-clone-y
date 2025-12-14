"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { AppInput } from "@/app/components";


const ESCAPED_SYMBOLS = `!@#$%^&*\\(\\)_\\+\\-=\\[\\]\\{\\}\\|;:'",\\.<>\\/\\?~`;
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?~";

export const PasswordInput = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <AppInput
            className="min-h-28"
            isRequired
            type={isVisible ? "text" : "password"}
            name="password"
            label="パスワード"
            errorMessage={`パスワードは8～24文字で、小文字、大文字、数字、記号(${SYMBOLS})をそれぞれ1文字以上含めてください。`}
            minLength={8}
            maxLength={24}
            pattern={`^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[${ESCAPED_SYMBOLS}])[A-Za-z\\d${ESCAPED_SYMBOLS}]+$`}
            endContent={
                <Button isIconOnly variant="light" onPress={toggleVisibility}>
                    {isVisible ?
                        <MdVisibilityOff color="white" size={24} /> :
                        <MdVisibility color="white" size={24} />}
                </Button>
            }
        />
    )
}
