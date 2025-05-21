import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import RoleListPage from "./pages/role/RoleListPage";
import UserListPage from "./pages/user/UserListPage";

function App() {
    return (
        <>
            <Navbar />
            <div style={{ width: "66%", margin: "30px auto" }}>
                <Routes>
                    <Route path="/roles" element={<RoleListPage />} />
                    <Route path="/users" element={<UserListPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
