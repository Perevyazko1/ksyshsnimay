import {FC, lazy, Suspense} from "react";
export const ContactPageAsync = lazy<FC>(()=> import("./ContactPage"))

export const DetailsContactComponent = () => (
    <Suspense>
        <ContactPageAsync/>
    </Suspense>
)