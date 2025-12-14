import { create } from "zustand";
import { type AppStoreState, createAppStoreState } from "./state";
import { type AppStoreActions, createAppStoreActions } from "./actions";


export * from "./selectors";

export type AppStore = AppStoreState & AppStoreActions;

export const useAppStore = create<AppStore>((set) => ({
    ...createAppStoreState(),
    ...createAppStoreActions(set)
}));
