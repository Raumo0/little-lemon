import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';
import Main from "./components/Main";

function App() {
    return (
        <Router>
            {/*<div className="App"> className="container"??*/}
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
            {/*</div>*/}
        </Router>
    );
}

export default App;
