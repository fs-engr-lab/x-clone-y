export type PolicyItemProps = {
    label: string;
    value: string;
}

export const PolicyItem = ({ label, value }: PolicyItemProps) => {
    return (
        <div>
            <div className="text-bold">
                {`・${label}`}
            </div>
            <div className="ml-8">
                {value}
            </div>
        </div>
    )
}
