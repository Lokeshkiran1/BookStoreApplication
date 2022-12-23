import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Lander from '../src/pages/lander/Lander'
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Lander /> */}
    </div>
  );
}

export default App;
