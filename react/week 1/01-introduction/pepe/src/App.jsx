import { useState } from 'react'
import './App.css'

function App(){


const[age,setAge] = useState(28);
const[name,setName] = useState("john doe")
const[country,setCountry] = useState("kenya")

  return(
    <>
  <h1 className='text-3xl font-bold underline'>My name is{name},i am {age} year old and i come from {country}</h1>
  </>
  )
}

export default App
