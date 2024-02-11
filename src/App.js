import './App.css';
import {Header} from "./Header";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";
import {Main} from "./Main";

function App() {
    return (
        // <div className="App"> className="container"??
        <>
            <Header/>
            <Navigation/>
            <Main/>
            <Footer/>
        </>
        // </div>
    );
}

export default App;
