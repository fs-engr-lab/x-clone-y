import { PolicyItem, PolicyItemProps } from "./PolicyItem";


export type PolicyChapterProps = {
    no: number;
    title: string;
    description?: string;
    items: PolicyItemProps[] | string[];
}

export const PolicyChapter = ({ no, title, description, items }: PolicyChapterProps) => {
    return (
        <div>
            <div className="m-2">
                <div className="text-xl mb-2">
                    {`${no}. ${title}`}
                </div>
                {description && (<div>
                    {description}
                </div>)}
                {items.map((item, index) => typeof item == 'string' ? (
                    <div key={index}>・{item}</div>
                ) : (
                    <PolicyItem key={item.label} {...item} />
                ))}
            </div>
        </div >
    )
}
