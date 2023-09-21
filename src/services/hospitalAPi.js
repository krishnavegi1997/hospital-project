// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/hospital' }),
  endpoints: (builder) => ({
    getAllHospitals: builder.query({
      query:()=>``,
    }),
    addHospital:builder.mutation({
        query:(newHospital)=>{
            return{
               url:``,
               method:'POST',
               body:newHospital
            }
        }
    }),
    addBeds:builder.mutation({
        query:(details)=>{
            console.log(details)
            return{
                url:`/${details.id}`,
                method:'PUT',
                body:details
            }
        }
    })
  }),
})
export const { useGetAllHospitalsQuery,useAddHospitalMutation ,useAddBedsMutation} =hospitalApi;
