import ValidateEmail from "./components/react/forms/ValidateEmail";
import CreateUser from "./components/react/forms/CreateUser";

const App = ({page})=>{
    return(
        <>
            {page === 'validate' && <ValidateEmail/>}
            {page === 'create' && <CreateUser/>}
        </>
    )
}

export default App