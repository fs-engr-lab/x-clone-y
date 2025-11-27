import { Link } from "@heroui/link";


type Props = {
    children: string;
}

export const TopFooterLink = ({ children }: Props) => {
    return (
        <Link
            className="text-xs text-gray-500"
            color="foreground"
            size="sm"
            isExternal
        >
            {children}
        </Link>
    )
}
