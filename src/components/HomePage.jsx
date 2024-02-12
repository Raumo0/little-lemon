import {Specials} from "./Specials";
import {CustomersSay} from "./CustomersSay";
import {Chicago} from "./Chicago";
import {CallToAction} from "./CallToAction";

export function HomePage() {
    return <>
        <CallToAction/>
        <div id="services"><Specials/></div>
        <div id="contact"><CustomersSay/></div>
        <div id="about"><Chicago/></div>
    </>;
}