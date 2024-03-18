import './App.css';
import Quiz from './Components/Quiz';
import {quiz} from '../src/Data';

function App() {
  return (
   <>

  <Quiz questions = {quiz.questions}/>
   </>
  )
}

export default App;
