import { type StoreSet } from "@/app/types";
import { type Session } from "@/server/auth";
import { type AppStore } from ".";


export type AppStoreActions = {
    setUser: (value: NonNullable<Session>) => void;
}

export const createAppStoreActions = (set: StoreSet<AppStore>): AppStoreActions => ({
    setUser: (value) => set({
        user: {
            id: value.user.username!,
            name: value.user.name,
            displayName: value.user.displayUsername!,
            email: value.user.email,
            image: value.user.image ? value.user.image : undefined
        }
    }),
});
