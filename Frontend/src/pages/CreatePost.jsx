import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>
    <h1>Create Post</h1>
    <form action="">
        <input type="file" name='image' accept='image/*' />
        <input type="text"  placeholder='enter caption' required />
        <button type='submit'>Sumit</button>
    </form>
    </section>
  )
}

export default CreatePost