import CourseGoal from "./components/CourseGoals.tsx";
import Header from "./components/Header.tsx";
import { useState } from 'react'

interface UserGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals]  = useState <UserGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => { // syntax if current state depends on the previous state 
      const newGoal: UserGoal  = {
        title: 'user input title',
        description: 'user input desc',
        id: Math.random(),
      };
      return [...prevGoals, newGoal]
    }); 
  }
  return (
    <main>
      <Header image = {{ 
        src: 'https://images.unsplash.com/photo-1516389573391-5620a0263801?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A list of goals'
      }}>
        <h1> Your Course Goals </h1>
      </Header>
      <button onClick = {handleAddGoal}> Add Goal </button>
      <ul>
        {goals.map((UserGoal) => (
          <li key = {UserGoal.id}>
            <CourseGoal title = {UserGoal.title}> 
              <p> {UserGoal.description} </p>
            </CourseGoal> 
          </li>
        ))}
      </ul>
    </main>
  );
}