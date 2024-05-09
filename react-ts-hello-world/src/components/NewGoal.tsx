import { type FormEvent } from "react";
import { useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    
    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value; //goal.current! indicates that the value will never be null

        event.currentTarget.reset(); // this is to reset the text inside the text box
        onAddGoal(enteredGoal,enteredSummary);
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal"> Your Goal </label>
            <input id = "goal" type = "text" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary"> Short Summary </label>
            <input id = "summary" type = "text" ref={summary} />
        </p>      
        <button> Add Goal </button>  
    </form>
}