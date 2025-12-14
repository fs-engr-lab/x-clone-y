import { LogoImage } from "@/app/components";
import { AccountMenu } from "./AccountMenu";
import { HomeButton } from "./HomeButton";


export const MenusPane = () => {
    return (
        <div className="flex flex-col w-3xs justify-between p-2">
            <div>
                <div className="mx-4 my-4">
                    <LogoImage size={32} />
                </div>
                <HomeButton />
            </div>
            <AccountMenu />
        </div>
    )
}
