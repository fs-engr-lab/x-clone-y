import { Divider } from "@heroui/divider";
import { TopLink } from "./TopLink";


export const TopFooter = () => {
    return (
        <footer className="w-full flex flex-col items-center gap-1 m-2">
            <div className="flex flex-row gap-2 h-3">
                <TopLink className="text-gray-500" href="/tos">利用規約</TopLink>
                <Divider orientation="vertical" />
                <TopLink className="text-gray-500" href="/pp">プライバシーポリシー</TopLink>
            </div>
            <div className="text-xs text-gray-500">
                © 2025 フルスタックエンジニアラボ
            </div>
        </footer>
    )
}
