import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
  return (
    <main>
      <Input id="name" label="Your Name" type="text"/>
      <Input id="age" label="Your Age" type="number"/>
      <Button el="button"href=""> A Button</Button>
      <Button el="anchor"href='https://google.com'> A Link</Button>
    </main>
  )
}

export default App;