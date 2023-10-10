import {FC, lazy,Suspense} from "react";
export const VideoPageAsync =lazy<FC>(()=> import("./VideoPage"))

export const DetailsVideoComponent = () =>(
    <Suspense>
        <VideoPageAsync/>
    </Suspense>
)