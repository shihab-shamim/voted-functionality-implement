import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Like from "./Like";


const Collection = () => {
    const navigate =useNavigate()
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const {data:like,refetch,isLoading}=useQuery({
        queryKey:['like'],
        queryFn:async ()=>{
            const {data}=await axiosPublic.get('/like')
            return data

        },
        initialData:[]
    })
   
 

    return (
        <div>
            <h3 className="text-xl text-center bg-red-500 p-4 ">This is collection</h3>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
            like.map(item=><Like key={item._id} item={item} refetch={refetch}></Like>)
        }


            </div>
            
        </div>
    );
};

export default Collection;