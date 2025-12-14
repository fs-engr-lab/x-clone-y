import { type AppStore } from ".";


export const selectUser = (store: AppStore) => store.user;

export const selectSetUser = (store: AppStore) => store.setUser;
