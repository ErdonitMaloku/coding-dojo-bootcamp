import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName = {"Doe"}
        lastName = {"Jane"}
        initialAge = {45}
        hairColor = {"black"}
      />
      <PersonCard
        firstName = {"Smith"}
        lastName = {"John"}
        initialAge = {88}
        hairColor = {"brown"}
      />
      <PersonCard
        firstName = {"Fillmore"}
        lastName = {"Millard"}
        initialAge = {50}
        hairColor = {"brown"}
      />
      <PersonCard
        firstName = {"Smith"}
        lastName = {"Maria"}
        initialAge= {62}
        hairColor = {"brown"}
      />
    </div>
  );
}

export default App;
