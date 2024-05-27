import Goals from './Goals.tsx';;
import { type Goal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type GoalsProps = {
    goals:Goal[];
    onDeleteGoal: (id:number)=>void;
};

export default function GoalList({goals, onDeleteGoal}:GoalsProps ) {
    if (goals.length === 0 ) {
        return (
            <InfoBox mode='hint'>
                Your dont have any goals! Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if(goals.length >= 4) {
        warningBox = <InfoBox mode = 'warning' severity='high'>
            You're doing a lot! Let's reassess and prioritise!
        </InfoBox>
    }

    return (
        <>
        {warningBox}
        <ul>
            {goals.map((goal) => (
                <li key = {goal.id}>
                <Goals id = {goal.id} title = {goal.title} onDelete={onDeleteGoal}> 
                <p> {goal.description} </p>
                </Goals> 
              </li>
            ))}
        </ul>
        </>
    )
}