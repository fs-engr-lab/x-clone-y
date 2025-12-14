"use client";
import { useRouter } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import { AppButton } from "@/app/components";


export const HomeButton = () => {
    const router = useRouter();

    const handlePress = () => {
        router.push("/home");
    };

    return (
        <AppButton
            className="text-xl"
            variant="light"
            startContent={<MdHomeFilled className="mr-2" size={32} />}
            onPress={handlePress}
        >
            ホーム
        </AppButton>
    )
}
