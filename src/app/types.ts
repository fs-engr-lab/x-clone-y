export type LayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type StoreSet<T> = {
    (partial: T | Partial<T> | ((store: T) => T | Partial<T>), replace?: false): void;
    (state: T | ((state: T) => T), replace: true): void;
}
