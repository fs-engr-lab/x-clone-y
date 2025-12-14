import { addToast, heroui, ToastProps } from "@heroui/react";


const COMMON: Pick<ToastProps, "variant" | "timeout"> = { variant: "solid", timeout: 10000 };

export const addSuccessToast = (title: string, description?: string) => {
    addToast({ color: "success", title, description, ...COMMON });
}

export const addErrorToast = (title: string, description?: string) => {
    addToast({ color: "danger", title, description, ...COMMON });
}


export default heroui();
