import { BrowserRouter, Route, Routes} from "react-router-dom";
import Ajuda from "./pages/Ajuda/Ajuda.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import Home from "./pages/Home/Home.jsx";
import Homework from "./pages/Homework/homework.jsx";
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/ajuda" element={<Ajuda/>}> </Route>
            <Route path='/contato' element={<Contato/>}> </Route>
            <Route path='/homework' element={<Homework/>}> </Route>
            <Route path='/login' element={<Login/>}> </Route>
            <Route path='/register' element={<Register/>}> </Route>

           
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;