import { useState } from "react";
import { addErrorToast } from "./hero";


export const useAPI = <T extends [FormData] | []>(
    exeFunc: (...args: T) => Promise<string>,
    onSuccess?: () => void
) => {
    const [isLoading, setIsLoading] = useState(false);

    const request = async (...args: T) => {
        setIsLoading(true);
        let errorMessage = "";
        try {
            errorMessage = await exeFunc(...args);
        } catch (error) {
            console.error(error);
            errorMessage = "予期せぬエラーです。管理者にお問い合わせください。";
        } finally {
            setIsLoading(false);
        }

        if (errorMessage) {
            addErrorToast(errorMessage);
        } else if (onSuccess) {
            onSuccess();
        };
    }

    return { isLoading, request }
}
