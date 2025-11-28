import { Divider } from "@heroui/divider";
import { TopFooterLink } from "./TopFooterLink";


export const TopFooter = () => {
    return (
        <footer className="w-full flex flex-col items-center gap-1 m-2">
            <div className="flex flex-row gap-2 h-3">
                <TopFooterLink href="/tos">利用規約</TopFooterLink>
                <Divider orientation="vertical" />
                <TopFooterLink href="/pp">プライバシーポリシー</TopFooterLink>
            </div>
            <div className="text-xs text-gray-500">
                © 2025 フルスタックエンジニアラボ
            </div>
        </footer>
    )
}
