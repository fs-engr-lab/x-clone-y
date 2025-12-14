import { Link, LinkProps } from "@heroui/link";


type Props = Pick<LinkProps, "className" | "href" | "children">

export const TopLink = ({ className, href, children }: Props) => {
    return (
        <Link
            className={`text-xs ${className}`}
            size="sm"
            isExternal
            href={href}
        >
            {children}
        </Link>
    )
}
