import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod"

function AddPost() {
const postSchema=z.object({
    title:z.string("title must string value").min(10,"min length must 10"),
    body:z.string("body must string value").min(10,"min length must 10")
})
const [addPost,setAddPost]=useState({id:new Date(),title:"",body:""})
let [error,setError]=useState([])
let navigate=useNavigate()
const handelChange=(e)=>{
    const val=e.target.value;
   setAddPost({...addPost,[e.target.name]:val})
   
}
const handelSubmit=(e)=>{
    e.preventDefault();
    let check=postSchema.safeParse(addPost)
    if(!check.success){
        let arrObj={}
         check.error.issues.forEach((err) => {
        arrObj[err.path[0]] = err.message;
      });
      setError(arrObj);
      return
    }
    let postData=async()=>{
            try{
                await axios.post(`http://localhost:3000/posts`,addPost);
                 toast.success(`post added successfully`)
                 setAddPost({title:"",body:""})
                 navigate("/posts")
                 
            }catch(e){
                toast.error(`Error : ${e}`)
            }
        }
        postData();

  
}

    return ( <div className="container">
        <h1>Add Post</h1>
        <form className="w-50" onSubmit={handelSubmit}>
            <div className="mb-2">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Add Title" name="title" value={addPost.title} onChange={handelChange}/>
                 <small className="text-danger">{error.title}</small>
            </div>
            <div className="mb-2">
                <label htmlFor="body" className="form-label">Body</label>
                <input type="text" className="form-control" id="body" placeholder="Add Body" name="body"value={addPost.body} onChange={handelChange}/>
                  <small className="text-danger">{error.body}</small>
            </div>
            <button className="btn btn-info w-25" >Send</button>
        </form>

    </div> );
}

export default AddPost;