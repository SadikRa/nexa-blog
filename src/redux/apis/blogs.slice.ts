import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useGetBlogQuery } = baseApi;
