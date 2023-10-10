import {FC, lazy, Suspense} from "react";
export const PhotoPageAsync =lazy<FC>(()=> import("./PhotoPage"))

export const  DetailsPhotoComponent = ()=>(
    <Suspense>
        <PhotoPageAsync/>
    </Suspense>
)