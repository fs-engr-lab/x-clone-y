import { Button, ButtonProps } from "@heroui/button";


export type AppButtonProps = Omit<ButtonProps, "radius">;

export const AppButton = ({ children, ...others }: AppButtonProps) => {
    return (
        <Button radius="full" {...others}>
            {children}
        </Button >
    )
}
