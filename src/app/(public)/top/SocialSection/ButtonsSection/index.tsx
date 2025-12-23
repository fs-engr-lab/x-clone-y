import { cookies } from "next/headers";
import { FcGoogle } from "react-icons/fc";

import { LastLoginUser } from "@/app/types";
import { SocialLoginButton } from "./SocialLoginButton";


const SOCIAL_LOGIN_INFOS = [
    { provider: "google", icon: <FcGoogle size={24} /> },
];


export const ButtonsSection = async () => {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("last_login_user")?.value;
    const lastUser = userCookie ? (JSON.parse(userCookie) as LastLoginUser) : undefined;

    return (<>
        {SOCIAL_LOGIN_INFOS.map(socialLoginIofo => (
            <SocialLoginButton
                key={socialLoginIofo.provider}
                user={lastUser}
                {...socialLoginIofo}
            />
        ))}
    </>)
}
