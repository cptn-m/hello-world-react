import Goals from './Goals.tsx';;
import { type Goal } from '../App.tsx';

type GoalsProps = {
    goals:Goal[]
}

export default function GoalList({goals}:GoalsProps ) {
    return (
        <ul>
            {goals.map((goal) => (
              <li key = {goal.id}>
                <Goals title = {goal.title}> 
                <p> {goal.description} </p>
                </Goals> 
              </li>
            ))}
        </ul>
    )
}