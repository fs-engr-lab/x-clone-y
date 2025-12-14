import { AppInput } from "@/app/components";


export const IDInput = () => {
    return (
        <AppInput
            isRequired
            name="id"
            label="ID"
            errorMessage={`IDは5～15文字で、半角英数小文字と_(アンダーバー)のみ利用可能です。例 : user_1`}
            minLength={5}
            maxLength={15}
            pattern={`^[a-z\\d_]+$`}
        />
    )
}
