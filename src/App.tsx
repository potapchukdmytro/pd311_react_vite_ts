import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import RoleListPage from "./pages/role/RoleListPage";

function App() {
    return (
        <>
            <Navbar/>
            <div style={{width: "66%", margin: "30px auto"}}>
                <RoleListPage />
            </div>
        </>
    );
}

export default App;
