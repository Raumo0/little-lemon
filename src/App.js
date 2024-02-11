import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {BrowserRouter as Router} from 'react-router-dom';
import Main from "./Main";

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
