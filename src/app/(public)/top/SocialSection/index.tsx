import { headers } from "next/headers";

import { auth } from "@/server/auth";
import { SocialSignUpModal } from "./SocialSignUpModal";
import { ButtonsSection } from "./ButtonsSection";


export const SocialSection = async () => {
    const _headers = await headers();
    const session = await auth.api.getSession({ headers: _headers });
    const user = session?.user;

    return (<>
        <ButtonsSection />
        <SocialSignUpModal user={user} />
    </>)
}
