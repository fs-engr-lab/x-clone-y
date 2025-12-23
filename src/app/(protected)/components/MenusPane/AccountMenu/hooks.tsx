import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";

import { User } from "@/app/libs/AppStore/state";
import { authClient } from "@/app/libs/auth-client";
import { useAPI } from "@/app/libs/hooks";


const logout = (user: User) =>
    async () => {
        const { error, data: accounts } = await authClient.listAccounts();

        let errorMessage = "";
        if (error) {
            console.error(error);
            errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
        } else {
            if (accounts && accounts.length === 1 && accounts[0].providerId !== "credential") {
                const socialLastLoginUser = {
                    provider: accounts[0].providerId,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
                setCookie("last_login_user", socialLastLoginUser);
            }
            await authClient.signOut();
        }

        return errorMessage;
    }


export const useMenusAPI = (user: User) => {
    const router = useRouter();

    return {
        logout: useAPI(logout(user), () => router.push("/"))
    }
}
