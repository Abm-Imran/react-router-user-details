import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/friends' element={<Friends></Friends>}>Friends</Route>
        <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>} ></Route>
        <Route path='/about' element={<About></About>}>Home</Route>
        <Route path='*' element={<NotFound></NotFound>}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
