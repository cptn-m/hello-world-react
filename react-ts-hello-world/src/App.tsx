import GoalList from './components/GoalList.tsx';
import Header from "./components/Header.tsx";
import { useState } from 'react'
import NewGoal from './components/NewGoal.tsx';

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
      <Header image={{
        src: 'https://images.unsplash.com/photo-1516389573391-5620a0263801?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A list of goals'
      }}>
        <h1> Your Course Goals </h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      {/* <button onClick={handleAddGoal}> Add Goal </button> */}
      {/* Corrected the prop name from onDeleteGoal to onDelete */}
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
