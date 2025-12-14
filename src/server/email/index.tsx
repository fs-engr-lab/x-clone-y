import { Resend } from "resend";
import { VerificationEmail } from "./VerificationEmail";


const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "onboarding@resend.dev";
const TO = "delivered@resend.dev";


export const sendVerificationEmail = async (name: string, to: string, url: string) => {

    const { error } = await resend.emails.send({
        from: FROM,
        to: [TO],
        subject: "【Xクローン：Y】ご登録メールアドレスの確認",
        react: <VerificationEmail name={name} to={to} url={url} />
    });

    if (error) {
        // TODO　エラー発生
    }
}
