import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import store from "./store";
import {Provider} from "react-redux";

function App() {

    return (
            <>
                <Provider store={store}>
                    <Header/>
                    <Main/>
                </Provider>
            </>
            )
}

export default App
