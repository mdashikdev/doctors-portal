import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AppointmentPage from './components/AppointmentPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/appointment' element={<AppointmentPage/>} />
      </Routes>
    </>
  );
}

export default App;
