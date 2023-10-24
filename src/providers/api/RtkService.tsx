import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Photos} from "./models/Photos";
import {Args} from "./models/Args";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://127.0.0.1:8000",
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getData: build.query<Photos[],Args>({
            query:({param , source})=>({
                url: `/${source}${param}` ,

        }),
            // providesTags: result => ["Post"]
        }),
})
})