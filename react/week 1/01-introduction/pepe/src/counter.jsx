// import  {useState}  from 'react'
// 
// function Counter(){

  //  const[count,setCount] = useState(0);

    // const handleIncrement = () => {
      //  setCount(count + 1)
  //  }
// const handleDecrement = () => {
    // setCount( count -1)run 
// }

// return(
  //  <div> 
    // <h1>Counter App</h1>
    // <br />
    // <h2>{count}</h2>
    // <br />
    // <button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:py-3' onClick={handleIncrement}>+</button>
    // <button className='bg-red-700 px-4 py-2 text-white hover:bg-sky-800 sm:py-3' onClick={handleDecrement}>-</button>
// </div>
// )
// }
// export default Counter

import { 'use State } from 'react'

function Garage (){

  const carName = "Dodge";

  return(
    <>
    <h2>Which car leaves in my garage</h2>
    < Car brand={carName}/>
    </>
  )

}

function Car(props){
  return <h2>I am a { props.brand }</h2>
}

export default Garage