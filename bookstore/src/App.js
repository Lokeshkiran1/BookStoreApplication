import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Lander from '../src/pages/lander/Lander'
import Header from './components/header/Header';
import Book from './components/book/Book'
import DashBoard from './pages/dashboard/Dashboard';
import BookSummary from './components/booksummary/BookSummary';
import Counter from './components/counter/Counter';
import MyCart from './components/mycart/MyCart';
import CustomerDetails from './components/customerDetails/CustomerDetails';
import OrderSuccess from './components/ordersuccess/OrderSuccess';
import Router1 from './components/router/Router';
import WishList from './components/wishlist/WishList';


function App() {
  return (
    <div className="App">
      {/* <WishList /> */}
      {/* <Router1 /> */}
      {/* <OrderSuccess /> */}
      {/* <CustomerDetails /> */}
      {/* <MyCart /> */}
      {/* <Counter /> */}
      {/* <BookSummary /> */}
      <DashBoard />
      {/* <Header />
      <Book /> */}
      {/* <Lander /> */}
    </div>
  );
}

export default App;
