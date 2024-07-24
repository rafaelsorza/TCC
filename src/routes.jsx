import { BrowserRouter, Route, Routes} from "react-router-dom";
import Ajuda from "./pages/Ajuda/Ajuda.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import Home from "./pages/Home/Home.jsx";
import Homework from "./pages/Homework/homework.jsx";
import Dashboard from "./components/comp-homework/dashboard/Dashboard.jsx";
import AddFood from "./components/comp-homework/add-food/AddFood.jsx";



function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/ajuda" element={<Ajuda/>}> </Route>
            <Route path='/contato' element={<Contato/>}> </Route>
            <Route path='/homework' element={<Homework/>}> </Route>

            <Route path="/" element={<Dashboard />}/>
             <Route path="/add-food" element={<AddFood />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;