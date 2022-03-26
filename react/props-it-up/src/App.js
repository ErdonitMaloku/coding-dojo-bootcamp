import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName = {"Doe"}
        lastName = {"Jane"}
        Age = {45}
        hairColor = {"black"}
      />
      <PersonCard
        firstName = {"Smith"}
        lastName = {"John"}
        Age = {88}
        hairColor = {"brown"}
      />
      <PersonCard
        firstName = {"Fillmore"}
        lastName = {"Millard"}
        Age = {50}
        hairColor = {"brown"}
      />
      <PersonCard
        firstName = {"Smith"}
        lastName = {"Maria"}
        Age = {62}
        hairColor = {"brown"}
      />
    </div>
  );
}

export default App;
