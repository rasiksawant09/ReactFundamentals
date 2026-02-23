import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageIndex}&limit=10`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, [pageIndex]);
  

  let printUserData = <h1 className='text-center text-2xl font-bold'>Loading...</h1>;
  if(userData.length > 0) {
    printUserData = userData.map((element,idx) =>{
      return <div key={idx} className='w-74 h-74 '>
        <Card element={element}/>
      </div>

    });
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-4'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-4 p-4'>
        <button style={{display: pageIndex === 1 ? 'none' : 'block'}} className='bg-amber-400 text-black rounded px-4 py-4 font-bold text-sm' onClick={() => { setUserData([]); setPageIndex(pageIndex > 1 ? pageIndex - 1 : 1); }}>Previous</button>
        <h2 className='font-bold text-md'>Page {pageIndex}</h2>
        <button className='bg-amber-400 text-black rounded px-6 py-4 font-bold text-sm' onClick={() => { setUserData([]); setPageIndex(pageIndex + 1); }}>Next</button>
      </div>
    </div>
  )
}

export default App
