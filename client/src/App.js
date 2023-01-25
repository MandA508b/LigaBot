import './App.css';
import Users from "./pages/Users";
import {Route, Routes} from "react-router";
import Login from "./components/Login";
import AuthRequire from "./components/AuthRequire";

function App() {

    return (
        <Routes>
            {/*private routes*/}
            <Route element={<AuthRequire/>}>
                    <Route path="/" element={<Users/>}/>

            </Route>
            {/*public routes*/}
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;
