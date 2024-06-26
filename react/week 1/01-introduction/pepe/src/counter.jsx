import  {useState}  from 'react'

function Counter(){

    const[count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }
const handleDecrement = () => {
    setCount( count -1)
}

return(
    <div> 
    <h1>Counter App</h1>
    <br />
    <h2>{count}</h2>
    <br />
    <button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:py-3' onClick={handleIncrement}>+</button>
    <button className='bg-red-700 px-4 py-2 text-white hover:bg-sky-800 sm:py-3' onClick={handleDecrement}>-</button>
</div>
)
}
export default Counter