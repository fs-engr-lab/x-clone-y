import { Divider } from "@heroui/divider";
import { FcGoogle } from "react-icons/fc";

import { LogoImage } from "@/app/components";
import { SocialLoginButton } from "./SocialLoginButton";
import { CreateAccountButton } from "./CreateAccountButton";
import { TopLink } from "./TopLink";
import { LoginButton } from "./LoginButton";
import { TopFooter } from "./TopFooter";


const SOCIAL_LOGIN_INFOS = [
    { provider: "google", label: "Googleで登録", icon: <FcGoogle size={24} /> },
]

export default function TopPage() {

    return (
        <div className="h-full max-w-7xl flex flex-col">
            <div className="grow flex flex-row">
                <div className="flex-1 flex justify-center items-center">
                    <LogoImage size={320} priority />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start gap-12">
                    <div className="font-bold text-6xl">すべての話題が、ここに。</div>
                    <div className="flex flex-col gap-4">
                        <div className="mb-2 font-bold text-3xl">
                            今すぐ参加しましょう。
                        </div>
                        {SOCIAL_LOGIN_INFOS.map(socialLoginIofo => (
                            <SocialLoginButton key={socialLoginIofo.provider} {...socialLoginIofo} />
                        ))}
                        <Divider />
                        <CreateAccountButton />
                        <div className="w-sm text-xs text-gray-500">
                            アカウントを登録することにより、
                            <TopLink href="/tos">利用規約</TopLink>と
                            <TopLink href="/pp">プライバシーポリシー</TopLink>
                            (Cookieの使用を含む)に同意したとみなされます。
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-lg">アカウントをお持ちの場合</div>
                        <LoginButton />
                    </div>
                </div>
            </div >
            <TopFooter />
        </div>
    );
}
