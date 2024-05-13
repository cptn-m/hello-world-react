// in this tsx file i want to create an info and warning info box

import { type ReactNode } from "react";

//discriminator

type HintBoxProp = {
    mode: 'hint';
    children: ReactNode; // this is to pass all the other things in
}

type WarningBoxProp = {
    mode: 'warning';
    // severity?: 'low'| 'medium' | 'high'; //the ? indicates that this property is optional
    severity: 'low'| 'medium' | 'high'; //the ? indicates that this property is optional
    children: ReactNode; // this is to pass all the other things in
} ;

type InfoBoxProp = HintBoxProp | WarningBoxProp

export default function InfoBox(props: InfoBoxProp) {
    const {mode, children} = props
    if (mode == 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p> { children } </p>
            </aside>
        );
    }

    const {severity} = props

    return (
        <aside className= {`infobox infobox-warning warning--${severity}`}>
            <h2> Warning </h2>
            <p> { children } </p>
        </aside>
    );
};