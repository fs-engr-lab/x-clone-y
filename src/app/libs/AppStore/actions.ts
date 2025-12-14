import { type StoreSet } from "@/app/types";
import { type Session } from "@/server/auth";
import { type AppStore } from ".";


export type AppStoreActions = {
    setUser: (value: NonNullable<Session>) => void;
}

export const createAppStoreActions = (set: StoreSet<AppStore>): AppStoreActions => ({
    setUser: (value) => set({
        user: {
            id: value.user.name!,
            name: value.user.displayUsername!,
            email: value.user.email,
            image: value.user.image
        }
    }),
});
