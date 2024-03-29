import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
// import { useSelector } from 'react-redux';

// const token = useSelector((state) => state.user.user.token);

let URL = "http://localhost:5000/api/"

export const carRentApi = createApi({
    reducerPath: 'carRentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        // prepareHeaders: (headers, { getState }) => {
        //     console.log("🚀 ~ file: carRent.js:14 ~ getState:", getState)
        //     // const token = Cookies.get('token');
        //     // const token = useSelector((state) => state.user.user.token);
        //     const token = getState().user?.user?.token;
        //     console.log("🚀 ~ file: carRent.js:18 ~ token:", token)
        //     if (token) {
        //         console.log("🚀 ~ file: carRent.js:19 ~ token:", token)
        //         headers.set('Authorization', token);
        //     }
        //     headers.set('Content-Type', 'application/json');
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => ({
                url: 'user/signUp',
                method: 'POST',
                body,
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: 'user/login',
                method: 'POST',
                body,
            })
        }),
        // get car by type
        getCar: builder.query({
            query: (filter) => `vehicle/`,
        }),
        // getItemById: builder.query({
        //     query: (id) => `items/${id}`,
        // }),
        addCar: builder.mutation({
            query: ({ formData, token }) => ({
                url: 'vehicle/',
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'authorization': token,
                },
            }),
        }),
    }),
});

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetCarQuery,
    useAddCarMutation,
} = carRentApi;