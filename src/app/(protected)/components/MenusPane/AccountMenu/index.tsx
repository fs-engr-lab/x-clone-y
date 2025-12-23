"use client";
import { Button, Listbox, ListboxItem, Popover, PopoverContent, PopoverTrigger, Spinner, User } from "@heroui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { selectUser, useAppStore } from "@/app/libs/AppStore";
import { useMenusAPI } from "./hooks";


export const AccountMenu = () => {
    const user = useAppStore(selectUser)!;
    const { logout } = useMenusAPI(user);

    const handleAction = (key: React.Key) => {
        switch (key) {
            case "logout":
                logout.request();
                break;
        }
    }

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
                        name={user?.displayName}
                        description={`@${user?.id}`}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-2xs">
                <Listbox aria-label="user-actions" onAction={handleAction}>
                    <ListboxItem
                        key="logout"
                        startContent={logout.isLoading ? <Spinner size="sm" color="white" /> : undefined}
                    >
                        {`@${user?.id}からログアウト`}
                    </ListboxItem>
                </Listbox>
            </PopoverContent>
        </Popover>
    )
}
