import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Posts() {
  let [posts, setPosts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    let getData = async () => {
      try {
        let { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
        console.log(posts);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const handelShowMore = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-4">
        <h1>Posts</h1>
        <button className="btn btn-primary" onClick={()=>{navigate("/posts/add")}}>Add Post</button>
      </div>
      <div className="cards d-flex flex-column gap-2 align-items-center my-5">
        {posts.length == 0 ? (
          <h3 className="fs-1">No posts</h3>
        ) : (
          posts.map(({ id, title, body }) => {
            return (
              <div className="card w-50 p-3" key={id}>
                <h2>
                  {title.length > 20 ? `${title.slice(0, 20)} ...` : title}
                </h2>
                <p>{body.length > 70 ? `${body.slice(0, 70)} ...` : body}</p>
                <button
                  onClick={() => handelShowMore(id)}
                  className="btn btn-primary w-50 mx-auto"
                >
                  Show More Details
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Posts;
