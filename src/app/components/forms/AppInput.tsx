import { Input, type InputProps } from "@heroui/input";


export type AppInputProps = Omit<InputProps, "variant" | "radius" | "size">;

export const AppInput = (props: AppInputProps) => {
    return (
        <Input
            className="min-h-24"
            variant="bordered"
            radius="sm"
            size="lg"
            {...props}
        />
    )
}
