import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Status from "./components/status/Status";
import StatusViewer from "./components/status/StatusViewer";
import SignIn from "./components/signIn/SignIn";
import Signup from "./components/signup/Signup";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/status" element={<Status/>}></Route>
                <Route path="/status/:userId" element={<StatusViewer/>}></Route>
                <Route path="/signIn" element={<SignIn/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
