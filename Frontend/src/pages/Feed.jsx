import React, { useState , useEffect} from "react";
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1791973649016-541e9784d792?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        caption:"scenary"
    },
  ]);
  useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        setPosts(res.data.posts)
    })
  },[])
  return (
    <section className="feed-section">
    {
        posts.length > 0 ?(
            posts.map((post)=>(
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
      <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <h1>No Post Available</h1>
        )
    }
    </section>
  );
};

export default Feed;
