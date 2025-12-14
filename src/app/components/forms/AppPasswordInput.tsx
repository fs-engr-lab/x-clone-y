"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { AppInput, type AppInputProps } from "@/app/components";


type Props = Omit<AppInputProps, "type" | "endContent">

export const AppPasswordInput = ({ className, name, label, ...others }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <AppInput
            className={`${className} min-h-28`}
            type={isVisible ? "text" : "password"}
            name={name ? name : "password"}
            label={label ? label : "パスワード"}
            endContent={
                <Button isIconOnly variant="light" onPress={toggleVisibility}>
                    {isVisible ?
                        <MdVisibilityOff color="white" size={24} /> :
                        <MdVisibility color="white" size={24} />}
                </Button>
            }
            {...others}
        />
    )
}
