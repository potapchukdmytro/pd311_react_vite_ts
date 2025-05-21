import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ServiceResponse } from "../../types";
import type { User } from "./types";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<ServiceResponse<User[]>, void>({
            query: () => "user",
            providesTags: ["User"]
        })
    })
})

export const { useGetUsersQuery } = userApi;