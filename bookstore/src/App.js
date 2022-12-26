import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Lander from '../src/pages/lander/Lander'
import Header from './components/header/Header';
import Book from './components/book/Book'
import DashBoard from './pages/dashboard/Dashboard';
import BookSummary from './components/booksummary/BookSummary';


function App() {
  return (
    <div className="App">
      <BookSummary />
      {/* <DashBoard /> */}
      {/* <Header />
      <Book /> */}
      {/* <Lander /> */}
    </div>
  );
}

export default App;
