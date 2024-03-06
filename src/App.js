import './App.css';
import Foot from './Components/Foot';
import Form from './Components/Form';
import Head from './Components/Head';
import Sect from './Components/Sect';
import Todos from './Components/Todos';


function App() {
  return (
    <div className="App">
     <main>
      <Head />
      <Form />
      <Todos />
      <Sect />
     </main>
     <Foot />
    </div>
  );
}

export default App;
