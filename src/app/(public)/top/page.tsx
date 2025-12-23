import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Divider } from "@heroui/divider";

import { LogoImage } from "@/app/components";
import { auth } from "@/server/auth";
import { CreateAccountButton } from "./CreateAccountButton";
import { LoginButton } from "./LoginButton";
import { SocialSection } from "./SocialSection";
import { TopFooter } from "./TopFooter";
import { TopLink } from "./TopLink";


export default async function TopPage() {
    const _headers = await headers();
    const session = await auth.api.getSession({ headers: _headers });

    if (session && session.user.displayUsername && session.user.username) {
        redirect("/home");
    }

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
                        <SocialSection />
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
