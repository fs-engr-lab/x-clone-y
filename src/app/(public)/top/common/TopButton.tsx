import { AppButton, AppButtonProps } from '@/app/components/common'


export const TopButton = ({ children, className, ...others }: AppButtonProps) => {
    return (
        <AppButton className={`w-[300px] ${className}`}  {...others}>
            {children}
        </AppButton>
    )
}
