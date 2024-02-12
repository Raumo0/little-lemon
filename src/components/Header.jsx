import {Component} from "react";
import {Navigation} from "./Navigation";
import './Header.css';

export class Header extends Component {
    render() {
        return <header>
            <img src="../../public/logo192.png" alt="Little Lemon Logo"/>
            <Navigation/>
        </header>;
    }
}