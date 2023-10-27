import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Photos} from "./models/Photos";
import {Args} from "./models/Args";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://ci41159.tw1.ru/",
        headers: {
            'Authorization': "token ab609d160173aa13aded7e95552d017221f601cd",
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"

            // 'Server': 'nginx/1.18.0 (Ubuntu)',
            // 'Cross-Origin-Opener-Policy': 'same-origin',
            // 'Referrer-Policy': 'same-origin',
            // 'Content-Length': '663',
            // 'Connection':'keep-alive',
            // 'Vary':'Accept, origin',
            // 'Allow':'GET, HEAD, OPTIONS',
            // 'X-Frame-Options':'DENY',
            // 'X-Content-Type-Options':'nosniff',

        }
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getData: build.query<Photos[],Args>({
            query:({param , source})=>({
                url: `/${source}${param}` ,
                method: 'GET'

        }),
            // providesTags: result => ["Post"]
        }),
})
})