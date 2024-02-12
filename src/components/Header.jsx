import {Component} from "react";
import {Navigation} from "./Navigation";
import './Header.css';
import risotto from '../assets/Logo.svg';

export class Header extends Component {
    render() {
        return <header>
            <img src={risotto} alt="Little Lemon Logo"/>
            <Navigation/>
        </header>;
    }
}