// imports
import { type ReactNode } from "react";

// lets start by defining the CourseGoal Interfact
interface GoalsProp {
    id:number;
    title: string;
    children: ReactNode;
    onDelete: (id:number)=>void;
}

// inject the interface 
// this is option 1
export default function Goals({title, id, children, onDelete}: GoalsProp)
{
    //output a list of course goals
    return <article>
        <div>
            <h2> {title} </h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)} > Delete </button>
    </article>
}