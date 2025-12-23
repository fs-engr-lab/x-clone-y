import { AppInput, AppInputProps } from "@/app/components";


type Props = Pick<AppInputProps, "defaultValue">;

export const IDInput = ({ defaultValue }: Props) => {
    return (
        <AppInput
            isRequired
            name="id"
            label="ID"
            defaultValue={defaultValue}
            errorMessage={`IDは5～15文字で、半角英数小文字と_(アンダーバー)のみ利用可能です。例 : user_1`}
            minLength={5}
            maxLength={15}
            pattern={`^[a-z\\d_]+$`}
        />
    )
}
