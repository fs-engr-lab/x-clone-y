import { Link } from "@heroui/link";


type Props = {
    href: string;
    children: string;
}

export const TopFooterLink = ({ href, children }: Props) => {
    return (
        <Link
            className="text-xs text-gray-500"
            color="foreground"
            size="sm"
            isExternal
            href={href}
        >
            {children}
        </Link>
    )
}
