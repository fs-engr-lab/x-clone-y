export type User = {
    id: string;
    name: string;
    displayName: string;
    email: string;
    image?: string;
}


export type AppStoreState = {
    user: User | null;
}


export const createAppStoreState = (): AppStoreState => ({
    user: null,
});
