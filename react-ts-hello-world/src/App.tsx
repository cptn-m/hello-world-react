import GoalList from './components/GoalList.tsx';
import Header from "./components/Header.tsx";
import { useState } from 'react'
import NewGoal from './components/NewGoal.tsx';
import profileImg from './assets/profilePhoto.jpg'

export interface Goal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  // Corrected function name from handeleDeleteGoal to handleDeleteGoal
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image = {{ src: profileImg, alt: 'A list of goals' }} >
        <h1> Mary's Goals </h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
