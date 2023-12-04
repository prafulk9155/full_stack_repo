import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes').then((res)=>{
      setJokes(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <div>
      
       Full Stack Development
       <p>Jokes:{jokes.length}</p>
       {
       jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3 >{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
      }
      </div>
      
    </>
  )
}

export default App
