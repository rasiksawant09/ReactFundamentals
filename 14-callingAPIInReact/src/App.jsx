import React, { useState } from 'react'
import axios from 'axios';  

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const getImageData = async () => {
    // API call here
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(response.data);
    setImageUrl(response.data[0].download_url);
  }
  return (
    <div>
      Axios Learning
      <button onClick={getImageData}>Get Image</button>
      <img className ='h-10 0 w-100' src={imageUrl} alt="" />
    </div>
  )
}

export default App