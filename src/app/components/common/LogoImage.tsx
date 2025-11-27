import Image from 'next/image';


type Props = {
    size: number;
    priority?: boolean;
}

export const LogoImage = ({ size, priority }: Props) => {
    return (
        <Image
            src="/logo.png"
            alt="logo"
            width={size}
            height={size}
            priority={priority}
        />
    )
}
