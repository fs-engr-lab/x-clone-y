type User = {
    id: string;
    name: string;
    email: string;
    image?: string | null;
}


export type AppStoreState = {
    user: User | null;
}


export const createAppStoreState = (): AppStoreState => ({
    user: null,
});
