import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Divider } from "@heroui/divider";

import { LayoutProps } from "@/app/types";
import { auth } from "@/server/auth";
import { MenusPane } from "./components/MenusPane";
import { ProtectedProvider } from "./components/ProtectedProvider";


const ProtectedLayout = async ({ children }: LayoutProps) => {
    const _headers = await headers();
    const session = await auth.api.getSession({ headers: _headers });

    if (!session) {
        redirect("/top");
    }

    return (
        <ProtectedProvider session={session}>
            <div className="h-full w-7xl flex flex-row justify-center">
                <MenusPane />
                <Divider orientation="vertical" />
                <div className="grow">
                    {children}
                </div>
            </div>
        </ProtectedProvider>
    )
}

export default ProtectedLayout;
