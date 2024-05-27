import { type FormEvent } from "react";
import { useRef, useState } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>("");

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const enteredGoal = goal.current!.value.trim(); // Trim to remove leading and trailing whitespaces
        const enteredSummary = summary.current!.value.trim(); // Trim to remove leading and trailing whitespaces

        if (enteredGoal === "" && enteredSummary === "") {
            setError("Please enter both a goal and a summary.");
        } else if (enteredGoal === "") {
            setError("Please enter a goal.");
        } else if (enteredSummary === "") {
            setError("Please enter a summary.");
        } else {
            // Clear any previous errors
            setError("");

            event.currentTarget.reset(); // this is to reset the text inside the text box
            onAddGoal(enteredGoal, enteredSummary);
        }
            return; // Prevent further execution
        }

        // Clear any previous errors
        setError("");

        event.currentTarget.reset(); // this is to reset the text inside the text box
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if there is one */}
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>      
            <button>Add Goal</button>  
        </form>
    );
}
