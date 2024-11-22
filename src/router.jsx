import { Route , Routes} from 'react-router-dom'
import { Home } from './pages/home/home'
import { User } from './pages/user/user'

export const Router = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user/:userId' element={<User/>}/>
        </Routes>
        </>
    )
}