import "./App.css";
import { useDeleteRoleMutation, useGetRolesQuery } from "./services/role/role";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";

function App() {
    const { data, isLoading, isError, error } = useGetRolesQuery();
    const [deleteRole] = useDeleteRoleMutation();

    const deleteHandler = async (id: string) => {              
        await deleteRole(id);
    };

    if (isError) {
        console.error(error);
    }

    return (
        <>
            {isLoading ? (
                <ProgressSpinner />
            ) : (
                !isError &&
                data?.payload !== null &&
                data?.payload.map((role) => (
                    <div key={role.id} style={{ display: "flex", alignItems: "center" }}>
                        <h1>{role.name}</h1>
                        <Button
                            onClick={() => deleteHandler(role.id)}
                            severity="danger"
                            style={{ marginLeft: "10px" }}
                            label="delete"
                        />
                    </div>
                ))
            )}
        </>
    );
}

export default App;
