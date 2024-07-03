import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './index.css'
const App = () =>{
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact/:id' element={<Contact/>} />
            </Routes>
        </div>
    )
}
export default App