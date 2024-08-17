import {createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";


//Define types for API response
interface destination {
    name: string
    lat: number
    lng: number
}

interface Itinerary{
    name: string
    lat: number
    lng: number
    description: string
    image: string
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getDestinations: builder.query<destination[], void>({
            query: () => "destinations",
        }),
        createItinerary: builder.mutation<Itinerary, Partial<Itinerary>>({
            query: (intineraryData) => ({
                url: "itinerary",
                method: "POST",
                body: intineraryData,
            }),
        })
})
});


export const {useGetDestinationsQuery, useCreateItineraryMutation} = apiSlice;


