import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from 'react-toastify';


function PostDetails() {
    let [post,setPost]=useState({})
    let {id}=useParams()
    let navigate=useNavigate()
  
    useEffect(()=>{
        let getData=async()=>{
            try{
                let {data}=await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(data)
            }catch(e){
                toast.error(`Error : ${e}`)
            }
        }
        getData();
    },[id])
    return ( <div className="cards d-flex flex-column gap-2 align-items-center my-5">
        <h1>Details of post {id}</h1>
        <div className="card w-50 p-3">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>navigate("/posts")} className="btn btn-primary w-50 mx-auto">Back to Posts</button>
        </div>
    </div> );
}

export default PostDetails;