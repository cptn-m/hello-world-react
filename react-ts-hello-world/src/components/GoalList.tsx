import Goals from './Goals.tsx';;
import { type Goal } from '../App.tsx';

type GoalsProps = {
    goals:Goal[];
    onDeleteGoal: (id:number)=>void;
}

export default function GoalList({goals, onDeleteGoal}:GoalsProps ) {
    return (
        <ul>
            {goals.map((goal) => (
              <li key = {goal.id}>
                <Goals id = {goal.id} title = {goal.title} onDelete={onDeleteGoal}> 
                <p> {goal.description} </p>
                </Goals> 
              </li>
            ))}
        </ul>
    )
}