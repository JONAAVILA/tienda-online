import ValidateEmail from "./components/react/forms/ValidateEmail";
import CreateUser from "./components/react/forms/userCreate/UserCreate";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = ({page})=>{
    return(
        <   >  
        <Provider store={store} >
            {page === 'validate' && <ValidateEmail/>}
            {page === 'create' && <CreateUser/>}
        </Provider>
        </>
    )
}

export default App