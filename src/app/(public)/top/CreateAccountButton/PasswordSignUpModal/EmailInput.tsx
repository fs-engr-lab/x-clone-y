import { AppInput } from "@/app/components";


export const EmailInput = () => {
    return (
        <AppInput
            isRequired
            type="email"
            name="email"
            label="メールアドレス"
            errorMessage="正しいメールアドレスを入力して下さい"
        />
    )
}
