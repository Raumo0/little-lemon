import {Specials} from "./Specials";
import {CustomersSay} from "./CustomersSay";
import {Chicago} from "./Chicago";
import {CallToAction} from "./CallToAction";

export function HomePage() {
    return <>
        <CallToAction/>
        <Specials/>
        <CustomersSay/>
        <Chicago/>
    </>;
}