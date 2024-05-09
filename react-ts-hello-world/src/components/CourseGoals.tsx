// imports
import { type ReactNode } from "react";

// lets start by defining the CourseGoal Interfact
interface Goals {
    title: string;
    children: ReactNode;
}

// inject the interface 
// this is option 1
export default function CourseGoal({title, children}: Goals)
{
    //output a list of course goals
    return <article>
        <div>
            <h2> {title} </h2>
            {children}
        </div>
        <button> DELETE </button>
    </article>
}