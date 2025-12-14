"use client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { User } from "@heroui/user";
import { MdOutlineMoreHoriz } from "react-icons/md";

import { selectUser, useAppStore } from "@/app/libs/AppStore";
import { authClient } from "@/app/libs/auth-client";


export const AccountMenu = () => {
    const router = useRouter();
    const user = useAppStore(selectUser);

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    console.log(user);

    return (
        <Popover showArrow placement="top">
            <PopoverTrigger>
                <Button
                    className="my-3 px-3 justify-between"
                    fullWidth
                    size="lg"
                    variant="light"
                    endContent={<MdOutlineMoreHoriz size={24} />}
                >
                    <User
                        classNames={{
                            wrapper: "w-33",
                            name: "truncate w-full text-lg text-left",
                            description: "truncate w-full text-base text-left"
                        }}
                        avatarProps={{ showFallback: true }}
                        name={user?.name}
                        description={`@${user?.id}`}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-2xs">
                <Listbox aria-label="user-actions">
                    <ListboxItem key="logout" onPress={handleLogout}>
                        {`@${user?.id}からログアウト`}
                    </ListboxItem>
                </Listbox>
            </PopoverContent>
        </Popover>
    )
}
