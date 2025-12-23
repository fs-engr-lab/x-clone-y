import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";

import { db } from "./db";
import * as schema from "./db/schema";
import { sendVerificationEmail } from "./email";


export const auth = betterAuth({
    database: drizzleAdapter(db, { provider: "pg" }),
    plugins: [username()],
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true
    },
    emailVerification: {
        sendOnSignUp: true,
        sendOnSignIn: true,
        expiresIn: 60 * 60 * 24 * 7,
        sendVerificationEmail: async ({ user, url }) => {
            // 現状プラグインで設定した値(dipslayUsername等)が型として定義されていないための対応
            const displayName = (user as schema.User).displayUsername!;
            await sendVerificationEmail(displayName, user.email, url);
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    }
});

export type Session = ReturnType<typeof auth.api.getSession> extends Promise<infer T> ? T : never;
