import type { Metadata } from "next";
import { Divider } from "@heroui/divider";

import { Providers } from "./components/Providers";
import { LayoutProps } from "./types";
import "./globals.css";


export const metadata: Metadata = {
    title: "Xクローン：Y",
    description: "X（旧Twitter）とは一切関係のない、非公式の学習およびデモンストレーションを目的としたクローンアプリであり、商用サービスではありません",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html className="dark">
            <body>
                <Providers>
                    <div className="h-screen w-screen flex flex-col">
                        <header className="p-2 flex flex-col items-center">
                            <div className="text-red-500">注意</div>
                            <div className="text-sm">
                                <div>本アプリは、Next.jsの実践的な学習のために、X（旧Twitter）の画面デザインや機能を可能な範囲で模倣していますが、</div>
                                <div>X（旧Twitter）とは一切関係のない、非公式の学習およびデモンストレーションを目的としたクローンアプリであり、商用サービスではありません。</div>
                            </div>
                        </header>
                        <Divider />
                        <main className="flex-auto flex justify-center">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
