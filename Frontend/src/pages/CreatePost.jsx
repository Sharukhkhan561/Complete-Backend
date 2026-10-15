import React from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
   const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        const formData = new FormData(e.target);
        
        try {
            const response = await axios.post("http://localhost:3000/create-post", formData);
            navigate("/feed")
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <section className='create-post-section'>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text"  placeholder='enter caption' name='caption' required />
        <button type='submit'>Sumit</button>
    </form>
    </section>
  )
}

export default CreatePost