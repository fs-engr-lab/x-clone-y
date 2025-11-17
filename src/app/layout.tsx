import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import { LayoutProps } from "./types";
import "./globals.css";


export const metadata: Metadata = {
    title: "Xクローン：Y",
    description: "X（旧Twitter）とは一切関係のない、非公式の技術学習・デモンストレーションを目的としたクローンアプリであり、公式サービスではありません",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html className="dark">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
