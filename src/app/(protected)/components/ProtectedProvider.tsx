"use client";
import { ReactNode, useEffect } from "react";
import { selectSetUser, useAppStore } from "@/app/libs/AppStore";
import { type Session } from "@/server/auth";


type Props = {
    session: NonNullable<Session>;
    children: ReactNode;
}

export const ProtectedProvider = ({ session, children }: Props) => {
    const setUser = useAppStore(selectSetUser);

    useEffect(() => {
        setUser(session);
    }, [session, setUser]);

    return children;
}
