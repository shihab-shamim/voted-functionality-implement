import { useContext, useEffect, useState } from "react";
import { TiArrowUpOutline, TiArrowUpThick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";


const Like = ({item,refetch}) => {
    const [stay,setStay]=useState(false)
   
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()

    const {data:voted}=useQuery({
        queryKey:['voted',user?.email],
        queryFn: async() =>{
            const {data} =await axiosPublic.get(`/voted/${item?._id}`)
            return data
        },
        initialData:[]
    })
    console.log(voted)
    useEffect(()=>{
        if(voted){
            const fill=voted.find(voted=>voted.email===user?.email)
            if(fill){
                setStay(fill)
            }
        }

    },[user?.email,voted])
    console.log(stay)
   
    
    
    const navigate=useNavigate()
    const [icon,setIcon]=useState({})
    const handleVoted=async (id)=>{
        if(!user){
            navigate('/login')
            return
        }


        console.log(id)
        setIcon(!icon)
        // console.log(user.email)
        try{
            const {data}=await axiosPublic.patch(`/like/${id}`)
            console.log(data)
            if(data.modifiedCount){
              refetch()
              const votedInfo={
            votedId:id,
            email:user?.email
        }
        try{
            const {data} = await axiosPublic.post('/voted',votedInfo)
            console.log(data)

        }
        catch(error){
            console.log(error)
        }


            }

        }
        catch(error){
            console.log(error)
        }


        // const votedInfo={
        //     votedId:id,
        //     email:user?.email
        // }
        // try{
        //     const {data} = await axiosPublic.post('/voted',votedInfo)
        //     console.log(data)

        // }
        // catch(error){
        //     console.log(error)
        // }
    }

    return (
        <div  className="card bg-base-100  shadow-xl">
                <figure>
                  <img
                    src={item.photo}
                    alt="Shoes" className="min-h-[200px]" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.location}</p>
                  <div className="card-actions justify-end">
                    <span  className="btn btn-primary">vote {item.vote}{stay.votedId===item.id?<TiArrowUpThick size={30}  /> :<button onClick={()=>handleVoted(item._id)}><TiArrowUpOutline size={30} color="red" /></button>}</span>
                    

                  </div>
                </div>
              </div>
    );
};

export default Like;